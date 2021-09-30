import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Imagem from '../models/Imagem';
import User from '../models/User';

// todos os módulos devem ser inseridos dentro do array models
const models = [Aluno, User, Imagem];

// criar a conexão com o banco de dados
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
// verificar se existe associação entre tabelas (foreignKey)
models.forEach((model) => model.associate && model.associate(connection.models));
