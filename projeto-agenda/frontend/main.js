import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import Registro from './modules/registro';

const login = new Login('.form-login');
const registro = new Registro('.form-cadastro');

login.init();
registro.init();

//import './assets/css/style.css';
