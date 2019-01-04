import { Http } from '../utils/Http'

const getEnvs = () => {
    return Http.get("/env")
        .then(resp => {
            return Promise.resolve(resp.data)
        })
}

export const envService = {
    getEnvs
}