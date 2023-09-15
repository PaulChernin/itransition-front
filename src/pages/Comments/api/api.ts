import fetch from "../../../api/fetch"
import { Comment } from "../components/types/Comment"

export const getComments = async (reviewId: number) => {
    const response: Array<Comment> = await fetch('/comment/get/byReview', {
        id: reviewId
    })
    return response
}

export const createComment = async (reviewId: number, text: string, userId: number) => {
    await fetch('/comment/create', {
        text: text,
        reviewId: reviewId,
        userId: userId
    })
}