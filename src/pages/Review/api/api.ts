import api from "../../../api/api"

export const getReview = async (id: number) => {
    const response = await api.post('/review/get/byId', {
        id: id
    })
    return response.data
}