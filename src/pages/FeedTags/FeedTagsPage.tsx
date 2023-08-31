import { useEffect, useState } from "react"
import { Preview } from "../../components/PreviewsList/types/Preview"
import { getLatestReviews } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import TagsCloud from "./components/TagsCloud"

const FeedTagsPage = () => {
    const [previews, setPreviews] = useState<Array<Preview>>([])
    
    useEffect(() => {
        getLatestReviews()
            .then(reviews => {
                setPreviews(reviews)
            })
    }, [])
    
    return <>
        <TagsCloud/>
        <PreviewsList previews={previews} />
    </>
}

export default FeedTagsPage