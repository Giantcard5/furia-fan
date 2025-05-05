import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {
    hltvRouter
} from './routes/hltv.routes';
import {
    userRouter
} from './routes/user.routes';
import {
    eventRouter
} from './routes/event.routes';
import {
    teamsRouter
} from './routes/team.route';
import {
    gamesRouter
} from './routes/game.route';
import { 
    shopRouter 
} from './routes/shop.route';
import {
    geminiRouter
} from './routes/gemini.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/hltv', hltvRouter);
app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/games', gamesRouter);
app.use('/api/shop', shopRouter);
app.use('/api/verification', geminiRouter);

app.get('/', (req, res) => {
    res.json({ message: 'FURIA FAN API is running' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});