import { useEffect, useState } from "react"
import { Preview } from "../../components/PreviewsList/types/Preview"
import { getBestReviews } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"

const FeedBestPage = () => {
    const [previews, setPreviews] = useState<Array<Preview>>([])
    
    useEffect(() => {
        getBestReviews()
            .then(reviews => {
                setPreviews(reviews)
            })
    }, [])
    
    return <>
        <PreviewsList previews={previews} />
    </>
}

export default FeedBestPage