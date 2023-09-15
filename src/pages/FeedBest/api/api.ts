import fetch from "../../../api/fetch"
import { Review } from "../../Review/components/types/Review"

export const getBestReviews = async () => {
    const response: Array<Review> = await fetch('/review/get/best')
    return response
}