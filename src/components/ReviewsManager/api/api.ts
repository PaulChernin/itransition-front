import fetch from "../../../api/fetch"
import { Review } from "../types/Review"
import { TableControls } from "../types/TableControls"

export const getReviews = async (userId: number, controls: TableControls) => {
    const response: Review[] = await fetch('/review/get/byUser', { // использовать тип Review
        userId: userId,
        category: controls.category,
        sortBy: controls.sortBy
    })
    return response
}

export const removeReview = async (id: number) => {
    await fetch('/review/remove', {
        id: id
    })
}