import pokemon from '../models/Pokemon.js';

class PokemonController {
    // GET /pokemons
    async index(req, res){
        try {
            const pokemons = await pokemon.find();
            return res.status(200).json(pokemons);

        } catch(err) {
            res.status(500).json( {message: `Erro interno do servidor: ${err.message}`} ); // Tratamento genérico de erros
        }
    }

    async showByNumber(req, res){
        try {
            const id = req.params.id;
            const result = await pokemon.findOne({number: id});
            return res.status(200).json(result); 
        } catch(err) {
            res.status(500).json( {message: `Erro interno do servidor: ${err.message}`} ); // Tratamento genérico de erros
        }
    }

    async store(req, res){
        try {
            const newPokemon = await pokemon.create(req.body);
            return res.status(201).json({message: "Pokemon adicionado com sucesso",  pokemon: newPokemon})
        } catch(err) {
            res.status(500).json( {message: `Erro interno do servidor: ${err.message}`} ); // Tratamento genérico de erros
        }
    }
}

export default new PokemonController();
