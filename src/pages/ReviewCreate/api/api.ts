import fetch from "../../../api/fetch"
import { Review } from "../../../components/ReviewEditor/types/review"
import { Product } from "../components/ProductEditor"

export const createReview = async (product: Product, review: Review, authorId: number) => {
    const response = await fetch('/review/create', {
        authorId: authorId,
        category: product.category,
        productName: product.name,
        title: review.title,
        text: review.text,
        authorsScore: review.authorScore,
        imageUrl: review.imageUrl,
        tags: []
    })
    return response.id as number
}