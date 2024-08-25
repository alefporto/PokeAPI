import pokemon from '../models/Pokemon.js';

class PokemonController {
    // GET /pokemons
    async index(req, res, next) {
        try {
            const queryPokemons = pokemon.find();

            req.result = queryPokemons;

            next();
        } catch (err) {
            res.json({ message: `Erro interno do servidor: ${err.message}` }); // Tratamento genérico de erros
        }
    }

    // GET /pokemons/:id
    async showByNumber(req, res) {
        try {
            const { id } = req.params;

            const result = await pokemon.findOne({ number: id });

            return res.status(200).json(result);
        } catch (err) {
            res.json({ message: `Erro interno do servidor: ${err.message}` }); // Tratamento genérico de erros
        }
    }

    // POST /pokemons
    async store(req, res) {
        try {
            await pokemon.create(req.body);

            return res.status(201).json({ message: "Sucesso ao adicionar pokemon" });
        } catch (err) {
            res.json({ message: `Erro interno do servidor: ${err.message}` }); // Tratamento genérico de erros
        }
    }

    // PUT /pokemons/:id
    async update(req, res) {
        try {
            const { id } = req.params

            await pokemon.updateOne({ number: id }, req.body);

            return res.status(200).json({ message: "Sucesso ao atualizar pokemon" });
        } catch (err) {
            res.json({ message: `Erro interno do servidor: ${err.message}` }); // Tratamento genérico de erros
        }
    }

    // DELETE /pokemons/:id
    async delete(req, res) {
        try {
            const { id } = req.params;

            const result = await pokemon.deleteOne({ number: id });

            if (result.deletedCount)
                return res.status(200).json({ message: "Sucesso ao deletar pokemon" });
        } catch (err) {
            res.json({ message: `Erro interno do servidor: ${err.message}` }); // Tratamento genérico de erros
        }
    }
}

export default new PokemonController();
