/** @type {import('next').NextConfig} */
const NEXT_URL = process.env.NEXT_URL;
const MONGO_URI = process.env.MONGO_URI;

const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_URL: NEXT_URL,
    MONGO_URI: MONGO_URI,
    JWT_SECRET:JWT_SECRET,
    EMAIL_SERVICE: EMAIL_SERVICE,
    EMAIL_USERNAME: EMAIL_USERNAME,
    EMAIL_PASSWORD: EMAIL_PASSWORD,
  }
}

module.exports = nextConfig
