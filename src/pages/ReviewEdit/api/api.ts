import { ReviewFormData } from "@/types/ReviewFormData"
import fetch from "../../../api/fetch"
import { Review } from "@/types/Review"

export const updateReview = async (review: ReviewFormData, id: number) => {
    await fetch('/review/update', {
        id: id,
        review: review
    })
}

const mapReview = (review: Review) => {
    const form: ReviewFormData = {
        productCategory: review.product.categoryName,
        productName: review.product.name,
        title: review.title,
        text: review.text,
        authorScore: review.authorsScore,
        imageUrl: review.imageUrl,
        tags: review.tags
    }
    return form
}

export const getReview = async (id: number) => {
    const response: Review = await fetch('/review/get/byId', {
        id: id
    })
    return mapReview(response)
}