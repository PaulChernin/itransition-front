import { AxiosError, isAxiosError } from "axios"
import axios from "./axios"
import router from "../router/router"

const handleError = (error: AxiosError) => {
    switch (error.response?.status) {
        case 404:
            router.navigate('/404', { replace: true })
            break
        case 403:
            router.navigate('/404', { replace: true })
            break
    }
}

const fetch = async (path: string, payload?: object) => {
    try {
        const response = await axios.post(path, payload)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            handleError(e)
        }
    }
}

export default fetch