import IncorrectRequest from './IncorrectRequest.js';

// Representa um erro de validação de dados
class ValidationError extends IncorrectRequest {
    // Extrai as mensagens de erro de validação do objeto err e coloca em uma única string
    constructor(err){
        const errMessage = Object.values(err.errors)
            .map(err => err.message)
            .join("; ");

        // Chama o construtor da classe base com a mensagem de erro personalizada
        super(`Foram encontrados um ou mais erros na validação: ${errMessage}`);
    }
}

export default ValidationError;
