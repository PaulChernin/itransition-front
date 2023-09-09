import Axios from "axios"

const axios = Axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

axios.interceptors.request.use((request) => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
        request.headers.Authorization = 'Bearer ' + jwt
    }
    return request
})

export default axios