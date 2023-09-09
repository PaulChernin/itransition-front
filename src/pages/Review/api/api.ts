import fetch from "../../../api/fetch"
import { Review } from "../components/types/Review"

export const getReview = async (id: number) => {
    const response = await fetch('/review/get/byId', {
        id: id
    })
    return response as Review
}