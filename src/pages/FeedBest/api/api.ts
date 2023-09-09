import fetch from "../../../api/fetch"
import { Review } from "../../Review/components/types/Review"

export const getBestReviews = async () => {
    const response = await fetch('/review/get/best')
    return response as Array<Review>
}