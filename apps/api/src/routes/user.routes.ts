import {
    Router
} from 'express';

import {
    getUserByCpf,
    createUser,
    loginUser,
    getUserSocialConnections,
    getUserProfileOverview,
    updateUserSettings,
    getUserSettings
} from '../services/user.service';

import { 
    UserRegistration 
} from '@furiafan/types';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const userData: UserRegistration = req.body;
        const newUser = await createUser(userData);

        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Failed to register user' });
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        const { cpf, password } = req.body;
        if (!cpf || !password) {
            return res.status(400).json({ error: 'CPF and password are required' });
        }
        const isValid = await loginUser(cpf, password);
        res.json({ success: isValid });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});

router.get('/:cpf', async (req, res) => {
    try {
        const user = await getUserByCpf(req.params.cpf);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

router.get('/:cpf/social', async (req, res) => {
    try {
        const socialConnections = await getUserSocialConnections(req.params.cpf);
        if (socialConnections === null) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(socialConnections);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user social connections' });
    }
});

router.get('/:cpf/profile-overview', async (req, res) => {
    try {
        const socialConnections = await getUserProfileOverview(req.params.cpf);
        if (socialConnections === null) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(socialConnections);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user social connections' });
    }
});

router.get('/:cpf/settings', async (req, res) => {
    try {
        const userSettings = await getUserSettings(req.params.cpf);

        res.json(userSettings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user profile overview' });
    }
});

router.put('/:cpf/settings', async (req, res) => {
    try {
        const updatedSettings = await updateUserSettings(req.params.cpf, req.body);
        if (!updatedSettings) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedSettings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user settings' });
    }
});

export const userRouter = router;