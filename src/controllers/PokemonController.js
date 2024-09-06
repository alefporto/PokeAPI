import IncorrectRequest from '../errors/IncorrectRequest.js';
import NotFound from '../errors/NotFound.js';
import pokemon from '../models/Pokemon.js';

class PokemonController {
    // Instancia a query dos pokemons no database e passar pro middleware de paginação
    async index(req, res, next) {
        try {
            const queryPokemons = pokemon.find();

            req.result = queryPokemons;

            next();
        } catch (err) {
            // Envia o erro para o próximo middleware de tratamento de erros.
            next(err);
        }
    }

    // Busca um pokemon pelo campo number no database. Se for encontrado retorna o pokemon, caso contrário retorna um erro 404.
    async showByNumber(req, res, next) {
        try {
            const { id } = req.params;

            const pokemonFound = await pokemon.findOne({ number: id });

            if (pokemonFound === null)
                return next(new NotFound("Não foi encontrado um pokemon com esse número"));

            return res.status(200).json(pokemonFound);
        } catch (err) {
            // Envia o erro para o próximo middleware de tratamento de erros.
            next(err);
        }
    }

    // Adiciona um novo pokemon ao database de acordo com os dados passados na requisição
    async store(req, res, next) {
        try {
            const { number } = req.body;
            const isPokemonExistente = await pokemon.findOne({ number });

            if (isPokemonExistente)
                return res.status(400).json({ message: "Já existe um pokemon com esse número" });

            await pokemon.create(req.body);

            return res.status(201).json({ message: "Pokemon adicionado com sucesso" });
        } catch (err) {
            // Envia o erro para o próximo middleware de tratamento de erros.
            next(err);
        }
    }

    // Atualiza um pokemon existente no database com os novos dados passados na requisição
    async update(req, res, next) {
        try {
            const { id } = req.params

            const pokemonFound = await pokemon.findOne({ number: id });

            if (!pokemonFound) return next(new IncorrectRequest("Não foi encontrado um pokemon com esse número"));

            const result = await pokemon.updateOne({ number: id }, req.body);
            
            if (!result.modifiedCount) return next(new IncorrectRequest("Não foi possível atualizar o pokemon"));

            return res.status(200).json({ message: "Pokemon atualizado com sucesso" });
        } catch (err) {
            // Envia o erro para o próximo middleware de tratamento de erros.
            next(err);
        }
    }

    // Deleta um pokemon existente no database
    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const pokemonFound = await pokemon.findOne({ number: id });

            if (!pokemonFound) return next(new IncorrectRequest("Não foi encontrado um pokemon com esse número"));

            await pokemon.deleteOne({ number: id });

            return res.status(200).json({ message: "Pokemon deletado com sucesso" });
        } catch (err) {
            // Envia o erro para o próximo middleware de tratamento de erros.
            next(err);
        }
    }
}

export default new PokemonController();
