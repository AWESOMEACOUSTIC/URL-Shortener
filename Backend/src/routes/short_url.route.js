import express from 'express';
import { createShortUrl, getShortUrl } from '../controller/short_url.controller.js';
const router = express.Router();

router.post('/create', createShortUrl);

router.get("/:shortUrl", getShortUrl);

export default router;