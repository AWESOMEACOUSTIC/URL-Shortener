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
    success:   true,
    message:   "Short URL created successfully",
    short_url: shortUrl.short_url,
  });
};
