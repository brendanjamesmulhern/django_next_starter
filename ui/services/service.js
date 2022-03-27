import axios from 'axios';

const url = "http://localhost:8000/api/";

export const IndexRoute = () => {
    return axios.get(url);
};