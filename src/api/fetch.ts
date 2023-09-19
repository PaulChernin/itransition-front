import { isAxiosError } from "axios"
import axios from "./axios"
import router from "../router/router"

const handleError = (error: unknown) => {
    if (isAxiosError(error) && (error.response?.status === 403 || error.response?.status === 404)) {
        router.navigate('/404', { replace: true })
    } else {
        console.log('error')
        router.navigate('/500')
    }
}

const fetch = async (path: string, payload?: object) => {
    try {
        const response = await axios.post(path, payload)
        return response.data
    } catch (e) {
        handleError(e)
    }
}

export default fetch