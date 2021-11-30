import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

const connection = new Sequelize(databaseConfig);

const models = [Aluno, Foto];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
