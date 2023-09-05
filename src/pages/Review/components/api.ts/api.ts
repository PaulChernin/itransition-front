import api from "../../../../api/api"

export const getLike = async (reviewId: number, userId: number) => {
    const response = await api.post('/like/get/byReview', {
        userId: userId,
        reviewId: reviewId
    })
    return response.data
}

export const addLike = async (reviewId: number, userId: number) => {
    const response = await api.post('like/create', {
        userId: userId,
        reviewId: reviewId
    })
    return response.data
}