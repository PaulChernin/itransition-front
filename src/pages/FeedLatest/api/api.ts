import { Review } from "@/types/Review"
import fetch from "../../../api/fetch"

export const getLatestReviews = async () => {
    const response: Array<Review> = await fetch('/review/get/latest')
    return response
}