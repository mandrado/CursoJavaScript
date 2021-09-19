import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

// todos os módulos devem ser inseridos dentro do array models
const models = [Aluno, User];

// criar a conexão com o banco de dados
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
