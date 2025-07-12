import urlSchema from '../models/shorturl.model.js';

export const saveShortUrlDao = async (longUrl, short_Url, userId) => {
    const shortUrl = new urlSchema({
        full_url: longUrl,
        short_url: short_Url,
    });
    if(userId){
        shortUrl.User = userId;
    }
    await shortUrl.save();
}