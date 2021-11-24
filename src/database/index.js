import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Disciplina from '../models/Disciplina';

const connection = new Sequelize(databaseConfig);

const models = [Aluno, Disciplina];

models.forEach((model) => model.init(connection));
