import { Review } from "@/components/ReviewForm/types/review"
import fetch from "../../../api/fetch"

type CreateReviewResponse = {
    id: number
}

export const createReview = async (review: Review, authorId: number) => {
    const response: CreateReviewResponse = await fetch('/review/create', { // TODO
        authorId: authorId,
        category: review.productCategory,
        productName: review.productCategory,
        title: review.title,
        text: review.text,
        authorsScore: review.authorScore,
        imageUrl: review.imageUrl,
        tags: review.tags
    })
    return response.id
}