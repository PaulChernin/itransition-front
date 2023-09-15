import fetch from "../../../../api/fetch"

export const getLike = async (reviewId: number, userId: number) => {
    const response = await fetch('/like/get', {
        userId: userId,
        reviewId: reviewId
    })
    return response.userLike as boolean // TODO: убрать as
}

export const addLike = async (reviewId: number, userId: number) => {
    await fetch('/like/create', {
        userId: userId,
        reviewId: reviewId
    })
}

export const getLikeCount = async (reviewId: number) => {
    const response = await fetch('/like/get/count', {
        reviewId: reviewId
    })
    return response.count as number
}