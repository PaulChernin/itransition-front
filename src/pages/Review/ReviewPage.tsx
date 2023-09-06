import ReviewArticle from "./components/ReviewArticle"
import { Review } from "./components/types/Review"
import { useEffect, useState } from "react"
import { getReview } from "./api/api"
import { useNumberParam } from "../../hooks/useNumberParam"
import { useNavigate } from "react-router-dom"

const ReviewPage = () => {
    const id = useNumberParam('id')!
    const navigate = useNavigate()

    const [review, setReview] = useState<Review>()

    const loadReview = async (id: number) => {
        const review = await getReview(id)
        if (!review) {
            navigate('/404')
            return
        }
        setReview(review)
    }
    
    useEffect(() => {
        loadReview(id)
    }, [id])

    return <>
        {review &&
            <ReviewArticle review={review} />
        }
    </>
}

export default ReviewPage