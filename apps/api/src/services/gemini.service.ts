import axios from 'axios';
import dotenv from 'dotenv';

import { config } from '../config';

dotenv.config();

interface DocumentAnalysis {
    cpf: string;
}

interface VerificationResult {
    isMatch: boolean;
    confidence: number;
    details: string;
}

export class GeminiService {
    private readonly apiKey: string;
    private readonly apiUrl: string;

    constructor() {
        this.apiKey = config.gemini.apiKey;
        this.apiUrl = config.gemini.apiUrl;
    }

    public async callGeminiAPI(prompt: string, images?: { mimeType: string; data: string }[]): Promise<string> {
        try {
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

            const response = await axios.post(
                this.apiUrl,
                { contents },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-goog-api-key': this.apiKey
                    }
                }
            );

            if (!response.data || !response.data.candidates || !response.data.candidates[0]) {
                throw new Error('Invalid response structure from Gemini API');
            }

            const candidate = response.data.candidates[0];
            if (!candidate.content || !candidate.content.parts || !candidate.content.parts[0]) {
                throw new Error('Invalid content structure in Gemini API response');
            }

            const text = candidate.content.parts[0].text;
            return text;
        } catch (error) {
            throw error;
        }
    }

    async analyzeDocument(imageBase64: string): Promise<DocumentAnalysis> {
        try {
            const cleanBase64 = imageBase64.replace(/^data:image\/jpeg;base64,/, '');
            const prompt = `
                You are an intelligent document reading assistant, helping to extract structured information from official documents.

                ### Task:
                Carefully review the visible text content in the uploaded image of a Brazilian identity document.

                - Look for any 11-digit numeric sequences.
                - These numbers may appear in the format XXX.XXX.XXX-XX or as a continuous string of 11 digits.
                - They are typically located near a label such as "CPF" or "Cadastro de Pessoas Físicas".
                - If a valid sequence is found, return it in plain numeric form (no punctuation).
                - If the number is not found or is illegible, return null.

                ### Format:
                Return only a JSON object in this format:
                {
                    "cpf": "string or null"
                }

                If the image contains 123.456.789-09, return:
                {
                    "cpf": "12345678909"
                }

                Notes:
                - The document is from Brazil and is used for general identification purposes.
                - Do not extract any other information.
                - Focus exclusively on locating and formatting this 11-digit identifier.
                - This task is intended for structured data extraction from official documents for internal use.
            `;

            const response = await this.callGeminiAPI(prompt, [{
                mimeType: 'image/jpeg',
                data: cleanBase64
            }]);

            if (!response) {
                console.error('No response from Gemini API');
                throw new Error('No response generated');
            }

            const cleanedResponse = response
                .replace(/```json\n?/g, '')
                .replace(/```\n?/g, '')
                .trim();

            try {
                const analysis = JSON.parse(cleanedResponse) as DocumentAnalysis;
                return analysis;
            } catch (parseError) {
                console.error('Error parsing JSON response:', parseError);
                throw new Error('Invalid JSON response from Gemini API');
            }
        } catch (error) {
            console.error('Error in analyzeDocument:', error);
            throw new Error('Failed to analyze document');
        }
    }

    async verifyIdentity(
        documentImageBase64: string,
        selfieImageBase64: string
    ): Promise<VerificationResult> {
        try {
            const cleanDocBase64 = documentImageBase64.replace(/^data:image\/jpeg;base64,/, '');
            const cleanSelfieBase64 = selfieImageBase64.replace(/^data:image\/jpeg;base64,/, '');
            const prompt = `
                You are an intelligent document verification assistant, helping to verify identity through document and photo comparison.

                ### Task:
                Carefully compare the two provided images:
                1. An official Brazilian identity document
                2. A selfie photo of the person holding the document

                - Analyze if the person in the selfie matches the person in the document photo
                - Check if the document in the selfie matches the document in the first image
                - Consider facial features, overall appearance, and document details
                - Return a confidence score between 0 and 100 based on the match quality

                ### Format:
                Return only a JSON object in this format:
                {
                    "isMatch": boolean,
                    "confidence": number (0-100),
                    "details": "string"
                }

                Example of a good match:
                {
                    "isMatch": true,
                    "confidence": 95,
                    "details": "Strong match between document photo and selfie. Facial features, skin tone, and overall appearance are consistent."
                }

                Example of a poor match:
                {
                    "isMatch": false,
                    "confidence": 30,
                    "details": "Significant differences in facial features and appearance between document photo and selfie."
                }

                Notes:
                - This is a legitimate identity verification process
                - Focus on objective comparison of visual features
                - Consider lighting and angle differences in the photos
                - This task is intended for identity verification purposes only
            `;

            const response = await this.callGeminiAPI(prompt, [
                {
                    mimeType: 'image/jpeg',
                    data: cleanDocBase64
                },
                {
                    mimeType: 'image/jpeg',
                    data: cleanSelfieBase64
                }
            ]);

            if (!response) {
                console.error('No response from Gemini API');
                throw new Error('No response generated');
            }

            const cleanedResponse = response
                .replace(/```json\n?/g, '')
                .replace(/```\n?/g, '')
                .trim();
                
            try {
                const verification = JSON.parse(cleanedResponse) as VerificationResult;
                return verification;
            } catch (parseError) {
                console.error('Error parsing JSON response:', parseError);
                throw new Error('Invalid JSON response from Gemini API');
            }
        } catch (error) {
            console.error('Error in verifyIdentity:', error);
            throw new Error('Failed to verify identity');
        }
    }
}