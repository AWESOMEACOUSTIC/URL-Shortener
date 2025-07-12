import urlSchema from '../models/shorturl.model.js';
import { DatabaseError } from '../utils/error.js';

export const saveShortUrlDao = async (longUrl, short_Url, userId) => {
    try {
        const shortUrl = new urlSchema({
            full_url: longUrl,
            short_url: short_Url,
        });
        if (userId) {
            shortUrl.User = userId;
        }
        await shortUrl.save();
    } catch (err) {
        console.error('DAO saveShortUrlDao error:', err);
        throw new DatabaseError('Failed to save short URL');
    }
};

export const getShortUrlDao = async (shortUrl) => {
    try {
        const url = await urlSchema.findOne({ short_url: shortUrl });
        if (!url) {
            return null;
        }
        url.clicks++;
        await url.save();
        return url;
    } catch (error) {
        console.error("Error fetching URL:", error);
        throw new DatabaseError("Failed to fetch short URL from the database");
    }
}