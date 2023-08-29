import api from "../../../api/api"

export const getLatestReviews = async () => {
    const response = await api.post('/review/get/latest')
    return response.data
}