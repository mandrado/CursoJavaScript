import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Contato from './modules/Contato';
import Login from './modules/Login';
import Registro from './modules/registro';

const login = new Login('.form-login');
const registro = new Registro('.form-cadastro');
const contato = new Contato('.form-contato');

login.init();
registro.init();
contato.init();

//import './assets/css/style.css';
