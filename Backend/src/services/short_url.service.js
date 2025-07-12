import {generateShortUrl} from "../utils/helper.js";
import { saveShortUrlDao } from "../dao/short_url.dao.js";

export const createShortUrlWithoutUserService = async (url) => {
    const genratedShortUrl = generateShortUrl(6);
    await saveShortUrlDao(url, genratedShortUrl);
    return genratedShortUrl;
}

export const createShortUrlWithUserService = async (url, userid) => {
    const genratedShortUrl = generateShortUrl(6);
    await saveShortUrlDao(url, genratedShortUrl, userid);
    return genratedShortUrl;
}

