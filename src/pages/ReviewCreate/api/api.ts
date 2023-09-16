import { ReviewFormData } from "@/types/ReviewFormData"
import fetch from "../../../api/fetch"

type CreateReviewResponse = {
    id: number
}

export const createReview = async (review: ReviewFormData, authorId: number) => {
    const response: CreateReviewResponse = await fetch('/review/create', { // TODO
        authorId: authorId,
        review: review
    })
    return response.id
}