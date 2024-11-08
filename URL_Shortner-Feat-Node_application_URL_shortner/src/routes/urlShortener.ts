import { Router } from 'express';
import crypto from 'crypto';
export const urlShortenerRouter = Router();
import UrlMapping from '../models/urlMappingModel';


// This endpoint will take a long URL and return a short URL
urlShortenerRouter.post('/long_url', async (req, res) => {
    try {
        const { originalUrl } = req.body;

        // Validate the original URL (e.g., check if it's a valid URL)
        if (!isValidUrl(originalUrl)) {
            return res.status(400).json({ error: 'Invalid URL format' });
        }

        // Generate a unique short URL (e.g., using a hash function or base62 encoding)
        const shortUrl = await generateShortUrl(originalUrl);

        // save the short URL to the database
        const urlMapping = new UrlMapping({
            originalUrl,
            shortUrl,
        });

        await urlMapping.save();
        // Return the short URL
       res.json({ shortUrl });
    } catch (error) {
        // Need proper error message
        console.error('Error shortening URL:', error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// create a get endpoint which will take shortened url and redirect to the original URL
urlShortenerRouter.get('/:shortUrl', async (req, res) => {
    try {
        const { shortUrl } = req.params;

        // Find the original URL in the database based on the short URL 
        const urlMapping = await UrlMapping.findOne({ shortUrl });
        if (!urlMapping) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Redirect to the original URL using HTTP status code 301 (permanent redirection)
        res.status(301).redirect(urlMapping.originalUrl);
    } catch (error) {
        console.error('Error redirecting to original URL:', error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Utility function to validate URL format
function isValidUrl(url: string): boolean {
    // Implement your validation logic here (e.g., regex check)
    // Return true if valid, false otherwise
    // Example: Use a regex pattern to validate URLs
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}

// Utility function to generate a short URL
// Generate a unique short URL using MD5 hash and Base62 encoding
async function generateShortUrl(originalUrl: string): Promise<string> {
    try {
        // Calculate the MD5 hash of the original URL
        const md5Hash = crypto.createHash('md5').update(originalUrl).digest('hex');

        // Encode the MD5 hash using Base64
        const base64Encoded = Buffer.from(md5Hash, 'hex').toString('base64');

        // Replace non-urlsafe characters to make the string urlsafe
        const base62Encoded = base64Encoded
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, ''); // Trim base64 padding characters

        // Shorten the string to the desired length (e.g., 8 characters)
        let shortUrl = base62Encoded.slice(0, 8);

        // Check if the generated short URL already exists in the system
        // Here you would perform a database lookup or any other storage mechanism
        // to ensure uniqueness
        const existingUrl = await UrlMapping.findOne({ shortUrl })
        
        // if the generated short URL already exists , create a new one
        if (existingUrl) {
            shortUrl = generateRandomShortUrl();
        }
        
        return shortUrl;
    } catch (error) {
        throw new Error('Error generating short URL');
    }
}

// Utility function to generate a random short URL
function generateRandomShortUrl(): string {
    // Generate a random string of characters (e.g., alphanumeric, base62, etc.)
    // Return the generated random string
    return crypto.randomBytes(4).toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, ''); // Trim base64 padding characters
}



export default urlShortenerRouter;