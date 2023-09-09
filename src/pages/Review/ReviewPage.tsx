import ReviewArticle from "./components/ReviewArticle"
import { Review } from "./components/types/Review"
import { useEffect, useState } from "react"
import { useNumberParam } from "../../hooks/useNumberParam"
import { getReview } from "./api/api"

const ReviewPage = () => {
    const id = useNumberParam('id')!
    const [review, setReview] = useState<Review>()

    const loadReview = async (id: number) => {
        setReview(await getReview(id))
    }
    
    useEffect(() => {loadReview(id)}, [id])

    return <>
        {review &&
            <ReviewArticle review={review} />
        }
    </>
}

export default ReviewPage