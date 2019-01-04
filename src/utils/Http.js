import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`

const Http = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
})

export { Http };