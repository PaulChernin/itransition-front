import { useState } from "react"
import { getReviewsByTag } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import TagsCloud from "./components/TagsCloud"
import { Review } from "@/types/Review"

const FeedTagsPage = () => {
    const [previews, setPreviews] = useState<Array<Review>>([])

    const load = async (tag: string) => {
        setPreviews(await getReviewsByTag(tag))
    }
    
    return <>
        <TagsCloud select={load} />
        <PreviewsList previews={previews} />
    </>
}

export default FeedTagsPage