import { Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { UserRegistration } from '../types/user.types';

const router = Router();
const userService = new UserService();

router.post('/register', async (req: Request, res: Response) => {
    try {
        const userData: UserRegistration = req.body;
        const newUser = await userService.registerUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Failed to register user' });
        }
    }
});

router.get('/:cpf', async (req: Request, res: Response) => {
    try {
        const user = await userService.getUserByCpf(req.params.cpf);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

router.get('/:cpf/social', async (req: Request, res: Response) => {
    try {
        const socialConnections = await userService.getUserSocialConnections(req.params.cpf);
        if (socialConnections === null) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(socialConnections);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user social connections' });
    }
});

router.get('/:cpf/profile-overview', async (req: Request, res: Response) => {
    try {
        const profileOverview = await userService.getUserProfileOverview(req.params.cpf);
        if (profileOverview === null) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(profileOverview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user profile overview' });
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { cpf, password } = req.body;
        if (!cpf || !password) {
            return res.status(400).json({ error: 'CPF and password are required' });
        }
        const isValid = await userService.loginUser(cpf, password);
        res.json({ success: isValid });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});

export const userRouter = router; 