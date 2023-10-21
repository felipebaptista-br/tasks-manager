import axios from 'axios'

const api = axios.create({
    baseURL: `https://todo-list-00qv.onrender.com/`,
});

export default api;