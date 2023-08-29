import { useParams } from "react-router-dom"
import ReviewArticle from "./components/ReviewArticle"
import { Review } from "./components/types/Review"
import { useEffect, useState } from "react"
import { getReview } from "./api/api"

const ReviewPage = () => {
    const { id } = useParams()
    const [review, setReview] = useState<Review>()
    
    useEffect(() => {
        getReview(id ? parseInt(id) : 0)
            .then(review => {
                setReview(review)
            })
    }, [id])

    return <>
        {review &&
            <ReviewArticle review={review} />
        }
    </>
}

export default ReviewPage