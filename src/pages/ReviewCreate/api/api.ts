import api from "../../../api/api"
import { Review } from "../../../components/ReviewEditor/types/review"
import { Product } from "../components/ProductEditor"

export const createReview = async (product: Product, review: Review, authorId: number) => {
    const response = await api.post('/review/create', {
        authorId: authorId,
        category: product.category,
        productName: product.name,
        title: review.title,
        text: review.text,
        authorsScore: review.authorScore,
        imageUrl: review.imageUrl,
        tags: []
    })
    return response.data.id
}