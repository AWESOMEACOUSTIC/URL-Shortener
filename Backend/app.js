import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/mongodb.config.js';
dotenv.config({ path: "./.env" });
import shortUrlRouter from './src/routes/short_url.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", shortUrlRouter);

app.use("/", shortUrlRouter)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})