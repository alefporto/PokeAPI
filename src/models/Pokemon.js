import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: [
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
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { versionKey: false });

const pokemon = mongoose.model("pokemons", pokemonSchema);

export default pokemon;
