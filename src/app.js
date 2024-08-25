import express from 'express';
import handler404 from './middlewares/handler404.js';
import errorHandler from './middlewares/errorHandler.js';
import router from './routes/pokemonsRoutes.js';
import './database/dbConnect.js';

const app = express();

app.use(express.json());
app.use(router);
app.use(handler404);
app.use(errorHandler);


export default app;
