import { Review } from "@/types/Review"
import fetch from "../../../api/fetch"

export const getBestReviews = async () => {
    const response: Array<Review> = await fetch('/review/get/best')
    return response
}