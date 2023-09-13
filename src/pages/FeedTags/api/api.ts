import fetch from "../../../api/fetch"
import { Review } from "../../Review/components/types/Review"
import { Tag } from "../types/tag"

export const getReviewsByTag = async (tag: string) => {
    const response = await fetch('/review/get/byTag', {
        tag: tag
    })
    return response as Array<Review>
}

export const getPopularTags = async () => {
    const response = await fetch('/tag/get/popular')
    return response as Array<Tag>
}