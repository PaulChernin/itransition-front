import { useNavigate } from "react-router-dom"
import { useNumberParam } from "../../hooks/useNumberParam"
import { getReview, updateReview } from "./api/api"
import { useEffect, useState } from "react"
import ReviewForm from "@/components/ReviewForm/ReviewForm"
import { Review } from "@/components/ReviewForm/types/review"

const ReviewCreatePage = () => {
    const id = useNumberParam('id')!
    const navigate = useNavigate()

    const [oldReview, setOldReview] = useState<Review>()

    const loadReview = async (id: number) => {
        setOldReview(await getReview(id))
    }

    useEffect(() => {loadReview(id)}, [id])

    const publish = async (review: Review) => {
        await updateReview(review, id)
        navigate('/review/' + id)
    }

    return <>
        {oldReview &&
            <ReviewForm
                defaultReview={oldReview}
                submit={publish}
            />
        }
    </>
}

export default ReviewCreatePage