import axios from 'axios';

export default axios.create({
  // configure aqui o endereço de sua api
  baseURL: 'https://api.mandrado.com',
});
