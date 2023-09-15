import { useEffect, useState } from "react"
import { getBestReviews } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import { Review } from "@/types/Review"

const FeedBestPage = () => {
    const [previews, setPreviews] = useState<Array<Review>>([])

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