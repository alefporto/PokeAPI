import mongoose from 'mongoose';
import BaseError from '../errors/BaseError.js';
import IncorrectRequest from '../errors/IncorrectRequest.js';
import ValidationError from '../errors/ValidationError.js';

// Intercepta erros que ocorrem durante o processamento de uma solicitação e envia uma resposta apropriada ao cliente
function errorHandler(err, req, res, next){
    // Verifica se o erro é de conversão de tipo do Mongoose
    if(err instanceof mongoose.Error.CastError) 
        return new IncorrectRequest().sendResponse(res);
    // Verifica se o erro é de validação do Mongoose
    else if(err instanceof mongoose.Error.ValidationError) 
        return new ValidationError(err).sendResponse(res);
    // Verifica se o erro é uma instância de BaseError
    else if(err instanceof BaseError) 
        return err.sendResponse(res);

    // Se nenhum dos casos anteriores se aplica, envia uma resposta de erro genérica
    return new BaseError().sendResponse(res);
}

export default errorHandler;
