import express from 'express';
import {redirectController }from '../controller/short_url.controller.js'

const router = express.Router();
router.get("/:shortUrl", redirectController);

export default router;