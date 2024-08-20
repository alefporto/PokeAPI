import pokemon from '../models/Pokemon.js';

class PokemonController {
    // GET /pokemons
    async index(req, res){
        try {
            const pokemons = await pokemon.find();
            return res.status(200).json(pokemons);
        } catch(err){
            res.json( {message: `Erro interno do servidor: ${err.message}`} ); // Tratamento genérico de erros
        }
    }
}

export default new PokemonController();
