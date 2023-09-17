import fetch from "../../../../api/fetch"

type GetLikeResponse = {
    userLike: boolean
}

export const getLike = async (reviewId: number, userId: number) => {
    const response: GetLikeResponse = await fetch('/like/get', {
        userId: userId,
        reviewId: reviewId
    })
    return response.userLike
}

export const addLike = async (reviewId: number, userId: number) => {
    await fetch('/like/create', {
        userId: userId,
        reviewId: reviewId
    })
}

type GetLikeCountResponse = {
    count: number
}

export const getLikeCount = async (reviewId: number) => {
    const response: GetLikeCountResponse = await fetch('/like/get/count', {
        reviewId: reviewId
    })
    return response.count
}

export const getLikeCountByUser = async (userId: number) => {
    const response: GetLikeCountResponse = await fetch('/like/get/count/byUser', {
        userId: userId
    })
    return response.count
}