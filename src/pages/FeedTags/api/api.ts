import fetch from "../../../api/fetch"
import { Review } from "../../Review/components/types/Review"

export const getLatestReviews = async () => {
    const response = await fetch('/review/get/latest')
    return response as Array<Review>
}

export const getPopularTags = async () => {
    const response = await fetch('/tag/get/popular')
    return response as Array<string>
}