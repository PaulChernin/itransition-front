import fetch from "../../../api/fetch"
import { Review } from "../../Review/components/types/Review"
import { Tag } from "../types/tag"

export const getReviewsByTag = async (tag: string) => {
    const response: Array<Review> = await fetch('/review/get/byTag', {
        tag: tag
    })
    return response
}

export const getPopularTags = async () => {
    const response: Array<Tag> = await fetch('/tag/get/popular')
    return response
}