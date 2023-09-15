import { Review } from "@/types/Review"
import fetch from "../../../api/fetch"

export const getReview = async (id: number) => {
    const response: Review = await fetch('/review/get/byId', {
        id: id
    })
    return response
}