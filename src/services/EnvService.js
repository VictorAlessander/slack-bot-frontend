import { Http } from '../utils/Http'

const getEnvs = () => {
    return Http.get("/env")
        .then(resp => {
            return Promise.resolve(resp.data)
        })
}

console.log(getEnvs())

export const envService = {
    getEnvs
}