import { getShortUrlDao } from "../dao/short_url.dao.js";
import {
    createShortUrlWithoutUserService,
    createShortUrlWithUserService
} from "../services/short_url.service.js";

export const createShortUrl = async (req, res) => {
    const { url, userid } = req.body;

    let shortUrl;
    if (userid) {
        // user-scoped short URL
        shortUrl = await createShortUrlWithUserService(url, userid);
    } else {
        // anonymous short URL
        shortUrl = await createShortUrlWithoutUserService(url);
    }

    return res.status(201).json({
        success: true,
        message: "Short URL created successfully",
        short_url: shortUrl.short_url,
    });
};

export const getShortUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;

        const urlDoc = await getShortUrlDao(shortUrl)

        if (!urlDoc) {
            return res.status(404).json({ success: false, message: "Short URL not found" });
        }

        let redirectTo = urlDoc.full_url;
        if (!/^https?:\/\//i.test(redirectTo)) {
            redirectTo = "https://" + redirectTo;
        }

        return res.redirect(redirectTo);

    } catch (error) {
        console.error("Error fetching URL:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}