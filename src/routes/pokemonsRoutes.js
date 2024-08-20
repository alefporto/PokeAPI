import { Router } from 'express';
import PokemonController from '../controllers/PokemonController.js';

const router = Router();

router.get('/pokemons', PokemonController.index);

export default router;
