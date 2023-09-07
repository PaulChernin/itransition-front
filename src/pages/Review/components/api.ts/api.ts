import api from "../../../../api/api"

export const getLike = async (reviewId: number, userId: number) => {
    const response = await api.post('/like/get', {
        userId: userId,
        reviewId: reviewId
    })
    return response.data
}

export const addLike = async (reviewId: number, userId: number) => {
    const response = await api.post('/like/create', {
        userId: userId,
        reviewId: reviewId
    })
    return response.data
}

export const getLikeCount = async (reviewId: number) => {
    const response = await api.post('/like/get/count', {
        reviewId: reviewId
    })
    return response.data.count
}