import axios from 'axios';

const api = process.env.REACT_API_URL;
console.log(api)
const Http = axios.create({
    baseURL: api,
    headers: {"Content-Type": "application/json"}
})

export { Http };