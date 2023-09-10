import ReviewEditor from "../../components/ReviewEditor/ReviewEditor"
import { Review } from "../../components/ReviewEditor/types/review"
import { useNavigate } from "react-router-dom"
import { useNumberParam } from "../../hooks/useNumberParam"
import { getReview, updateReview } from "./api/api"
import { useEffect, useState } from "react"

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
            <ReviewEditor
                defaultReview={oldReview}
                submit={publish}
            />
        }
    </>
}

export default ReviewCreatePage