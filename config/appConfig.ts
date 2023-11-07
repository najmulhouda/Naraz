const NEXT_URL = process.env.NEXT_URL;

const baseUrl =
    typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : NEXT_URL;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

export { baseUrl, MONGO_URI };