import { Router } from 'express';
import PokemonController from '../controllers/PokemonController.js';

const router = Router();

router.get('/pokemons', PokemonController.index);
router.get('/pokemons/:id', PokemonController.showByNumber)

export default router;
