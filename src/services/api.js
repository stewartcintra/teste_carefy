import axios from 'axios';

const api = axios.create({
  baseURL: 'http://contasfacil.herokuapp.com',
  timeout: 5000,
});

export default api;
