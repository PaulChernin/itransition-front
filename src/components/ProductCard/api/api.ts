import fetch from "../../../api/fetch"

const createRating = async (productId: number, rating: number) => {
    await fetch('/rating/create', {
        productId: productId,
        rating: rating
    })
}

const getAverageRating = async (productId: number) => {
    const response = await fetch('/rating/get/average', {
        productId: productId
    })
    return response.average
}

export {
    createRating,
    getAverageRating
}