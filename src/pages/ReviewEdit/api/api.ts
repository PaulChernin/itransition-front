import { Review } from "@/components/ReviewForm/types/review"
import fetch from "../../../api/fetch"

export const updateReview = async (review: Review, id: number) => {
    await fetch('/review/update', { // TODO
        id: id,
        category: review.productCategory,
        productName: review.productName,
        title: review.title,
        text: review.text,
        authorsScore: review.authorScore,
        imageUrl: review.imageUrl,
        tags: review.tags
    })
}

export const getReview = async (id: number) => {
    const response = await fetch('/review/get/byId', {
        id: id
    })
    return { // TODO: заменить на ReviewForm
        productCategory: response.product.categoryName,
        productName: response.product.name,
        title: response.title,
        text: response.text,
        authorScore: response.authorsScore,
        imageUrl: response.imageUrl,
        tags: response.tags
    } as Review
}