import BaseError from './BaseError.js';

// Representa um erro de página não encontrada (erro 404)
class NotFound extends BaseError {
    constructor(message = "Página não encontrada"){
        super(message, 404);
    }
}

export default NotFound;
