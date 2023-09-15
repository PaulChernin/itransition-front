import fetch from "../../../api/fetch"

const createRating = async (productId: number, rating: number) => {
    await fetch('/rating/create', {
        productId: productId,
        rating: rating
    })
}

type GetAverageRatingResponse = {
    average: number
}

const getAverageRating = async (productId: number) => {
    const response: GetAverageRatingResponse = await fetch('/rating/get/average', {
        productId: productId
    })
    return response.average
}

export {
    createRating,
    getAverageRating
}