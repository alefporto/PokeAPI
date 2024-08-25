import { Router } from 'express';
import PokemonController from '../controllers/PokemonController.js';
import paginator from '../middlewares/paginator.js';

const router = Router();

router.get('/pokemons', PokemonController.index, paginator);
router.get('/pokemons/:id', PokemonController.showByNumber);
router.post('/pokemons', PokemonController.store);
router.put('/pokemons/:id', PokemonController.update);
router.delete('/pokemons/:id', PokemonController.delete);

export default router;
