import { Http } from '../utils/Http'

const getEnvs = () => {
    return Http.get("/hello")
        .then(resp => {
            return Promise.resolve(resp.data)
        })
}

export const envService = {
    getEnvs
}