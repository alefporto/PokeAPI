import { Router } from 'express';
import PokemonController from '../controllers/PokemonController.js';
import paginator from '../middlewares/paginator.js';

/**
 * Cria um roteador do Express para definir rotas relacionadas a pokemons.
 *
 * Este roteador define rotas para:
 *  - Listar pokemons paginados      (GET /pokemons)
 *  - Buscar um pokemon pelo número  (GET /pokemons/:id)
 *  - Criar um novo pokemon          (POST /pokemons)
 *  - Atualizar um pokemon existente (PUT /pokemons/:id)
 *  - Deletar um pokemon             (DELETE /pokemons/:id)
 */

const router = Router();

router.get('/pokemons', PokemonController.index, paginator);
router.get('/pokemons/:id', PokemonController.showByNumber);
router.post('/pokemons', PokemonController.store);
router.put('/pokemons/:id', PokemonController.update);
router.delete('/pokemons/:id', PokemonController.delete);

export default router;
