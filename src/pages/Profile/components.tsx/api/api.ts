import api from "../../../../api/api"
import { TableControls } from "../types/TableControls"

export const getReviews = async (userId: number, controls: TableControls) => {
    const response = await api.post('/review/get/byUser', {
        userId: userId,
        category: controls.category,
        sortBy: controls.sortBy
    })
    return response.data
}

export const removeReview = async (id: number) => {
    await api.post('/review/remove', {
        id: id
    })
}