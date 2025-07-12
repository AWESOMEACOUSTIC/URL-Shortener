import { generateShortUrl } from "../utils/helper.js";
import { saveShortUrlDao } from "../dao/short_url.dao.js";
import { getShortUrlDao } from "../dao/short_url.dao.js";
import { NotFoundError } from '../utils/error.js';
import { UrlCreationError } from "../utils/error.js";


export const createShortUrlWithoutUserService = async (url) => {
    try {
        const short = generateShortUrl(6);
        await saveShortUrlDao(url, short);
        return short;
    } catch (err) {
        throw new UrlCreationError();
    }
};

export const createShortUrlWithUserService = async (url, userid) => {
    try {
        const short = generateShortUrl(6);
        await saveShortUrlDao(url, short, userid);
        return short;
    } catch (err) {
        throw new UrlCreationError();
    }
}

export const getRedirectUrlService = async (shortUrl) => {
    const urlDoc = await getShortUrlDao(shortUrl);
    if (!urlDoc) {
        throw new NotFoundError(`Short URL "${shortUrl}" not found`);
    }

    urlDoc.clicks++;
    await urlDoc.save();

    let redirectTo = urlDoc.full_url;
    if (!/^https?:\/\//i.test(redirectTo)) {
        redirectTo = 'https://' + redirectTo;
    }
    return redirectTo;
};

