import { getRedirectUrlService } from "../services/short_url.service.js";
import {
    createShortUrlWithoutUserService,
    createShortUrlWithUserService
} from "../services/short_url.service.js";

export const createShortUrl = async (req, res, next) => {
  try {
    const { url, userid } = req.body;

    const shortUrl = userid
      ? await createShortUrlWithUserService(url, userid)
      : await createShortUrlWithoutUserService(url);

    return res.status(201).json({
      success:   true,
      message:   "Short URL created successfully",
      short_url: shortUrl.short_url,
    });
  } catch (err) {
    next(err); 
  }
};

export const redirectController = async (req, res, next) => {
  try {
    const redirectTo = await getRedirectUrlService(req.params.shortUrl);
    return res.redirect(redirectTo);
  } catch (err) {
    next(err);
  }
};