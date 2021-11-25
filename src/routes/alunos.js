import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const routes = new Router();

routes.get('/', AlunoController.index);
routes.post('/', AlunoController.store);

export default routes;
