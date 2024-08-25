// Representa um erro genérico do servidor, que servirá de forma para erros mais complexos
class BaseError extends Error {
    // Cria uma nova instancia de BaseError
    constructor(message = "Erro interno do servidor", status = 500) {
        super();
        this.message = message;
        this.status  = status;
    }

    // Envia uma resposta de erro pro cliente
    sendResponse(res) {
        res.status(this.status).json({
            message: this.message,
            status:  this.status
        })
    }
}

export default BaseError;
