import { useState } from "react"
import { Preview } from "../../components/PreviewsList/types/Preview"
import { getReviewsByTag } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import TagsCloud from "./components/TagsCloud"

const FeedTagsPage = () => {
    const [previews, setPreviews] = useState<Array<Preview>>([])

    const load = async (tag: string) => {
        setPreviews(await getReviewsByTag(tag))
    }
    
    return <>
        <TagsCloud select={load} />
        <PreviewsList previews={previews} />
    </>
}

export default FeedTagsPage