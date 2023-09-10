import fetch from "../../../api/fetch"
import { Review } from "../../../components/ReviewEditor/types/review"

export const createReview = async (review: Review, authorId: number) => {
    const response = await fetch('/review/create', { // TODO
        authorId: authorId,
        category: review.productCategory,
        productName: review.productCategory,
        title: review.title,
        text: review.text,
        authorsScore: review.authorScore,
        imageUrl: review.imageUrl,
        tags: review.tags
    })
    return response.id as number
}