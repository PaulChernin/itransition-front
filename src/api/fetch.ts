import { AxiosError, isAxiosError } from "axios"
import axios from "./axios"
import router from "../router/router"

const redirect404 = () => {
    router.navigate('/404', { replace: true })
}

const handleAxiosError = (error: AxiosError) => {
    switch (error.response?.status) {
        case 404:
            redirect404()
            break
        case 403:
            redirect404()
            break
    }
}

const handleError = (error: unknown) => {
    if (isAxiosError(error)) {
        handleAxiosError(error)
    } else {
        throw error
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