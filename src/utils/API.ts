import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/todos';

export default axios.create({
  baseURL: API
});