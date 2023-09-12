import { useEffect, useState } from "react"
import { Preview } from "../../components/PreviewsList/types/Preview"
import { getBestReviews } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"

const FeedBestPage = () => {
    const [previews, setPreviews] = useState<Array<Preview>>([])

    const load = async () => {
        setPreviews(await getBestReviews())
    }
    
    useEffect(() => {
        load()
    }, [])
    
    return <>
        <PreviewsList previews={previews} />
    </>
}

export default FeedBestPage