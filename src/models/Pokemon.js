import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    
    id: {type: mongoose.Schema.Types.ObjectId},

    nome: {
        type: String,
        required: true
    },

    numero: {
        type: Number,
        required: true
    },

    tipo: {
        type: String,
        enum: [ "Normal",
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
                "Fairy" ],
        required: true
    },

    imagem: {
        type: String,
        required: true
    }

}, {versionKey: false});

const pokemon = mongoose.model("pokemons", pokemonSchema);

export default pokemon;
