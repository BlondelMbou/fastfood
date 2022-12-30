import axios from 'axios'

const baseURL='http://0.0.0.0:8055'

const https = axios.create({
    baseURL,
    timeout: 30 * 1000,
})

export default {
    get: https.get,
    post: https.post,
    option: https.options,
    delete: https.delete,
    baseURL
}