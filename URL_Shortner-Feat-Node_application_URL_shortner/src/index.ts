import express from 'express';
import { urlShortenerRouter } from './routes/urlShortener'; // Create this router
import connectDB from "./db";

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// routes
// handle URL Shortening
app.use('/shorten', urlShortenerRouter); // Handle URL shortening

app.get('/', (req, res) => {
  res.send('Hello, URL Shortener!' );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
