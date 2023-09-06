import axios, { AxiosError } from "axios"
import api from "../../../api/api"

export const getReview = async (id: number) => {
    try {
        const response = await api.post('/review/get/byId', {
            id: id
        })
        return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const error = e as AxiosError
            if (error.response?.status === 404) {
                return null
            }
        }
        throw e
    }
}