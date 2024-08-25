import express from 'express';
import handler404 from './middlewares/handler404.js'
import errorHandler from './middlewares/errorHandler.js';
import router from './routes/pokemonsRoutes.js';
import './database/dbConnect.js'; // Conecta a aplicação ao banco de dados

const app = express(); // Instancia uma aplicação Express, que é a base da API

app.use(express.json()); // Configura o Express para interpretar solicitações JSON
app.use(router); // Registra as rotas para pokemons
app.use(handler404); // Registra o middleware de tratamento de solicitações não encontradas (404)
app.use(errorHandler); // Registra o middleware global de tratamento de erros

export default app;
