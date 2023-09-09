import fetch from "../../../api/fetch"
import { Review } from "../types/Review"
import { TableControls } from "../types/TableControls"

export const getReviews = async (userId: number, controls: TableControls) => {
    const response = await fetch('/review/get/byUser', {
        userId: userId,
        category: controls.category,
        sortBy: controls.sortBy
    })
    return response as Review
}

export const removeReview = async (id: number) => {
    await fetch('/review/remove', {
        id: id
    })
}