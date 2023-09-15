import fetch from "../../../api/fetch"
import { Review } from "../../Review/components/types/Review"

export const getLatestReviews = async () => {
    const response: Array<Review> = await fetch('/review/get/latest')
    return response
}