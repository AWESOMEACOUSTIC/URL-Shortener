import express from 'express';
import { createShortUrl } from '../controller/short_url.controller.js';
const router = express.Router();

router.post('/create', createShortUrl);

router.get("/:shortUrl", async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const url = await urlSchema.findOne({ short_url: shortUrl });
        if (!url) {
            return res.status(404).json({ success: false, message: "Short URL not found" });
        }
        url.clicks++;
        await url.save();
        let redirectTo = url.full_url;
        if (!/^https?:\/\//i.test(redirectTo)) {
            redirectTo = "https://" + redirectTo;
        }
        
        return res.redirect(redirectTo);

    } catch (error) {
        console.error("Error fetching URL:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

export default router;