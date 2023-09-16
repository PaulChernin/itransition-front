import { ReviewFormData } from "@/types/ReviewFormData"
import fetch from "../../../api/fetch"

export const updateReview = async (review: ReviewFormData, id: number) => {
    await fetch('/review/update', {
        id: id,
        review: review
    })
}

export const getReview = async (id: number) => {
    const response = await fetch('/review/get/byId', {
        id: id
    })
    return {
        productCategory: response.product.categoryName, // TODO:
        productName: response.product.name,
        title: response.title,
        text: response.text,
        authorScore: response.authorsScore,
        imageUrl: response.imageUrl,
        tags: response.tags
    } as ReviewFormData
}