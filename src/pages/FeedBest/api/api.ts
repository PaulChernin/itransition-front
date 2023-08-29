import api from "../../../api/api"

export const getBestReviews = async () => {
    const response = await api.post('/review/get/best')
    return response.data
}