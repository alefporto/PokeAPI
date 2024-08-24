import { Router } from 'express';
import PokemonController from '../controllers/PokemonController.js';

const router = Router();

router.get('/pokemons', PokemonController.index);
router.get('/pokemons/:id', PokemonController.showByNumber)

router.post('/pokemons', PokemonController.store)

router.put('/pokemon/:id', PokemonController.update)

export default router;
