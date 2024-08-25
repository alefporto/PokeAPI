import IncorrectRequest from '../errors/IncorrectRequest.js';

// Middleware de paginação de resultados
// Permite que o cliente especifique o limite de registros por página e a página atual
async function paginator(req, res, next){
    try {
        // Obtém os valores dos query params da requisição
        let { limit = 5, page = 1, order = 1 } = req.query;

        // Converte os valores para inteiro
        limit = parseInt(limit);
        page  = parseInt(page);
        order = parseInt(order);
    
        // Faz a validação para os campos `limit`, `page` e `order`
        if( !(limit > 0 && page > 0) )
            return next( new IncorrectRequest("Página e limite devem ser maior do que zero") );
        if( isNaN(order) || (order !== 1 && order !== -1) )
            return next( new IncorrectRequest("Tipo de ordenação inválida") );
    
        // Resgata a consulta pré-configurada que no controlador.
        const resultado = req.result;
    
        // Aplica a paginação e a ordenação aos resultados
        const resultadoPaginado = await resultado.find()
        .sort({ number: order })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
        
        // Envia a resposta com os resultados paginados
        return res.status(200).json(resultadoPaginado);
    } catch(err){
        // Envia o erro para o próximo middleware de tratamento de erros.
        next(err);
    }
    
}

export default paginator;
