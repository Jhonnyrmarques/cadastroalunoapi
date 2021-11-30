import { Router } from 'express';

import ImageController from '../controllers/FotoController';

const router = new Router();

router.post('/', ImageController.store);

export default router;
