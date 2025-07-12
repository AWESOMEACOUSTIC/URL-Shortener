import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/mongodb.config.js';
dotenv.config({ path: "./.env" });
import shortUrlRouter from './src/routes/short_url.route.js';
import redirectRouter from './src/routes/redirect.route.js';
import { errorHandler } from './src/middlewares/error_handler.middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", shortUrlRouter);
app.use("/", redirectRouter)

// 404 Error Handler
app.use((req, res, next) => {
  res
    .status(404)
    .json({
      success: false,
      message: `Route ${req.method} ${req.originalUrl} not found`,
    });
});

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})