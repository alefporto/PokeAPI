import mongoose from 'mongoose';
import "./globalValidator.js"

// Define o Schema (estrutura) de um documento no banco de dados
const pokemonSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {
        type: String,
        cast: "O campo {PATH} deve receber uma string válida",
        min: [0, "O valor {VALUE} é menor que o número permitido para o campo {PATH}"],
        required: [true, "O campo {PATH} é obrigatório"]
    },
    number: {
        type: Number,
        cast: "O campo {PATH} deve receber um número válido",
        required: [true, "O campo {PATH} é obrigatório"]
    },
    type: {
        type: String,
        cast: "O campo {PATH} deve receber uma string válida",
        enum: {
            values: [
                "Normal",
                "Fire",
                "Water",
                "Grass",
                "Flying",
                "Fighting",
                "Poison",
                "Electric",
                "Ground",
                "Rock",
                "Psychic",
                "Ice",
                "Bug",
                "Ghost",
                "Steel",
                "Dragon",
                "Dark",
                "Fairy"
            ],
            message: "O tipo {VALUE} não é válido"
        },
        required: [true, "O campo {PATH} é obrigatório"]
    },
    image: {
        type: String,
        cast: "O campo {PATH} deve receber uma string válida",
        required: [true, "O campo {PATH} é obrigatório"]
    }
}, { versionKey: false });

// Instancia o modelo pokemon com base no schema definido anteriormente
const pokemon = mongoose.model("pokemons", pokemonSchema);

export default pokemon;
