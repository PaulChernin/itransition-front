import api from "../../../api/api"
import { Review } from "../../../components/ReviewEditor/types/review"
import { Product } from "../components/ProductEditor"

export const createReview = async (product: Product, review: Review) => {
    const response = await api.post('/review/create', {
        authorId: 1,
        categoryId: product.category,
        productName: product.name,
        title: review.title,
        text: review.text,
        authorsScore: review.authorScore,
        tags: []
    })
    console.log(response)
}