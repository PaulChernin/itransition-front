import { useNavigate } from "react-router-dom"
import { useNumberParam } from "../../hooks/useNumberParam"
import { getReview, updateReview } from "./api/api"
import { useEffect, useState } from "react"
import ReviewForm from "@/components/ReviewForm/ReviewForm"
import { ReviewFormData } from "@/types/ReviewFormData"

const ReviewCreatePage = () => {
    const id = useNumberParam('id')!
    const navigate = useNavigate()

    const [oldReview, setOldReview] = useState<ReviewFormData>()

    const loadReview = async (id: number) => {
        setOldReview(await getReview(id))
    }

    useEffect(() => {loadReview(id)}, [id])

    const publish = async (review: ReviewFormData) => {
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