import { 
    Router, 
    Request, 
    Response 
} from 'express';

import {
    GeminiService 
} from '../services/gemini.service';

const router = Router();

const geminiService = new GeminiService();

router.post('/analyze-document', async (req, res) => {
    try {
        const { imageBase64 } = req.body;

        if (!imageBase64) {
            return res.status(400).json({ error: 'Image base64 is required' });
        }

        const analysis = await geminiService.analyzeDocument(imageBase64);
        res.json(analysis);
    } catch (error) {
        console.error('Error in analyze-document route:', error);
        res.status(500).json({ error: 'Failed to analyze document' });
    }
});

router.post('/verify-identity', async (req, res) => {
    try {
        const { documentImageBase64, selfieImageBase64 } = req.body;

        if (!documentImageBase64 || !selfieImageBase64) {
            return res.status(400).json({
                error: 'Both document and selfie images are required'
            });
        }

        const verification = await geminiService.verifyIdentity(
            documentImageBase64,
            selfieImageBase64
        );
        res.json(verification);
    } catch (error) {
        console.error('Error in verify-identity route:', error);
        res.status(500).json({ error: 'Failed to verify identity' });
    }
});

export default router; 

export const geminiRouter = router; 