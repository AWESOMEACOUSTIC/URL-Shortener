import urlSchema from '../models/shorturl.model.js';

export const saveShortUrlDao = async (longUrl, short_Url, userId) => {
    const shortUrl = new urlSchema({
        full_url: longUrl,
        short_url: short_Url,
    });
    if (userId) {
        shortUrl.User = userId;
    }
    await shortUrl.save();
}

export const getShortUrlDao = async (shortUrl) => {
    const url = await urlSchema.findOne({ short_url: shortUrl });
    if (!url) {
        return null;
    }
    url.clicks++;
    await url.save();
    return url;
}