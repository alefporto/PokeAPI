import BaseError from './BaseError.js';

// Representa um erro de solicitação incorreta (erro de validação ou dados inválidos)
class IncorrectRequest extends BaseError {
    constructor(message = "Um ou mais dados fornecidos estão incorretos"){
        super(message, 400);
    }
}

export default IncorrectRequest;
