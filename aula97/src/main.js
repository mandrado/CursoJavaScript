/**
 * 122. Core-js e regenerator-runtime
 * 
 * Sempre que a aplicação precisar rodar em navegadores mais antigos
 * devemos importar 'core-js/stable' e 'regenerator-runtime/runtime'
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import executa from './modules/promises';
import './assets/css/style.css';

executa();