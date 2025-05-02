import dotenv from 'dotenv';

dotenv.config();

export const config = {
    gemini: {
        apiKey: process.env.GEMINI_API_KEY || '',
        apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-001:generateContent',
    }
};