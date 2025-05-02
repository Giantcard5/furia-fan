import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-001:generateContent';

interface DocumentAnalysis {
    cpf: string;
    name: string;
    userImage: string;
}

interface VerificationResult {
    isMatch: boolean;
    confidence: number;
    details: string;
}

export class GeminiService {
    private async callGeminiAPI(prompt: string, images?: { mimeType: string; data: string }[]) {
        if (!API_KEY) {
            throw new Error('GEMINI_API_KEY not configured');
        }

        const contents = [{
            parts: [
                { text: prompt },
                ...(images?.map(image => ({
                    inlineData: {
                        mimeType: image.mimeType,
                        data: image.data
                    }
                })) || [])
            ]
        }];

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': API_KEY
            },
            body: JSON.stringify({ contents })
        });

        if (!response.ok) {
            const error = await response.json() as { error?: { message?: string } };
            throw new Error(error.error?.message || 'Failed to access Gemini API');
        }

        const data = await response.json() as {
            candidates?: Array<{
                content?: {
                    parts?: Array<{
                        text?: string;
                    }>;
                };
            }>;
        };
        return data.candidates?.[0]?.content?.parts?.[0]?.text;
    }

    async analyzeDocument(imageBase64: string): Promise<DocumentAnalysis> {
        try {
            const prompt = `
                Analyze this document image and extract the following information:
                1. CPF (Brazilian tax ID) number
                2. Full name of the person
                3. Base64 of the person's photo from the document
                
                Return the information in JSON format with the following structure:
                {
                    "cpf": "string",
                    "name": "string",
                    "userImage": "string"
                }
                
                If any information is not found, return null for that field.
            `;

            const response = await this.callGeminiAPI(prompt, [{
                mimeType: 'image/jpeg',
                data: imageBase64
            }]);

            if (!response) {
                throw new Error('No response generated');
            }

            return JSON.parse(response) as DocumentAnalysis;
        } catch (error) {
            console.error('Error analyzing document:', error);
            throw new Error('Failed to analyze document');
        }
    }

    async verifyIdentity(
        documentImageBase64: string,
        selfieImageBase64: string
    ): Promise<VerificationResult> {
        try {
            const prompt = `
                Compare these two images:
                1. The first image contains a document with a person's photo
                2. The second image is a selfie of the person holding the document next to their face
                
                Analyze if:
                1. The person in the selfie matches the person in the document photo
                2. The document in the selfie matches the document in the first image
                    
                Return the analysis in JSON format with the following structure:
                {
                    "isMatch": boolean,
                    "confidence": number (0-100),
                    "details": "string"
                }
            `;

            const response = await this.callGeminiAPI(prompt, [
                {
                    mimeType: 'image/jpeg',
                    data: documentImageBase64
                },
                {
                    mimeType: 'image/jpeg',
                    data: selfieImageBase64
                }
            ]);

            if (!response) {
                throw new Error('No response generated');
            }

            return JSON.parse(response) as VerificationResult;
        } catch (error) {
            console.error('Error verifying identity:', error);
            throw new Error('Failed to verify identity');
        }
    }
} 