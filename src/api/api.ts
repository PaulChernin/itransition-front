import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((request) => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
        request.headers.Authorization = 'Bearer ' + jwt
    }
    return request
})

export default api