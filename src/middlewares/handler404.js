import NotFound from '../errors/NotFound.js';

// Middleware para tratar solicitações não encontradas (que não correspondem a nenhuma rota)
// Cria uma nova instância do erro NotFound e chama o próximo middleware passando o erro 404
function handler404(req, res, next){
    const error404 = new NotFound();
    next(error404);
}

export default handler404;
