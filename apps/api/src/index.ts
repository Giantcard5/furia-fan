import express from 'express';
import cors from 'cors';
import helmet from 'helmet'

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

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(helmet())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use('/api/hltv', hltvRouter);
app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/games', gamesRouter);
app.use('/api/shop', shopRouter);
app.use('/api/verification', geminiRouter);

export default app;