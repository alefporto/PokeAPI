import mongoose from 'mongoose';

// Validador global para campos do tipo string
// Verifica se a string não está vazia após a remoção de espaços em branco
mongoose.Schema.Types.String.set("validate", {
    validator: (value) => value.trim() != "",
    message: "O campo {PATH} está vazio"
})
