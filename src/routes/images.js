import { Router } from 'express';
import multer from 'multer';

import ImageController from '../controllers/ImageController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), ImageController.store);

export default router;
