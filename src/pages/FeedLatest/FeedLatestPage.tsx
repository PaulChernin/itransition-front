import { useEffect, useState } from "react"
import { getLatestReviews } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import { Review } from "@/types/Review"
import { Center, Spinner } from "@chakra-ui/react"

const FeedBestPage = () => {
    const [previews, setPreviews] = useState<Array<Review>>([])
    const [isLoading, setIsLoading] = useState(false)

    const load = async () => {
        setIsLoading(true)
        setPreviews(await getLatestReviews())
        setIsLoading(false)
    }
    
    useEffect(() => {
        load()
    }, [])
    
    return <>
        {isLoading && <Center><Spinner/></Center>}
        <PreviewsList previews={previews} />
    </>
}

export default FeedBestPage