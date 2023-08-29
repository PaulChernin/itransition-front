import api from "../../../api/api"

export const getComments = async (reviewId: number) => {
    const response = await api.post('/comment/get/byReview', {
        id: reviewId
    })
    return response.data
}

export const createComment = async (reviewId: number, text: string) => {
    await api.post('/comment/create', {
        text: text,
        reviewId: reviewId,
        userId: 3
    })
}