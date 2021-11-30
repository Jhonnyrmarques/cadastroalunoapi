import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';

import alunosRoutes from './routes/alunos';
import fotosRoutes from './routes/images';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/alunos/', alunosRoutes);
    this.app.use('/fotos/', fotosRoutes);
  }
}

export default new App().app;
