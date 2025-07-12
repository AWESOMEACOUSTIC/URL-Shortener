import express from 'express';
import { getShortUrl } from '../controller/short_url.controller.js';

const router = express.Router();
router.get("/:shortUrl", getShortUrl);

export default router;