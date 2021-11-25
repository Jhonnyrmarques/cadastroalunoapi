import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const routes = new Router();

routes.get('/', AlunoController.index);
routes.post('/', AlunoController.store);
routes.put('/:id', AlunoController.update);
routes.get('/:id', AlunoController.show);
routes.delete('/:id', AlunoController.delete);

export default routes;
