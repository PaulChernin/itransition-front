import { createReview } from "./api/api"
// import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useNumberParam } from "../../hooks/useNumberParam"
import { ReviewFormData } from "@/types/ReviewFormData"
import ReviewForm from "@/components/ReviewForm/ReviewForm"

const defaultReview: ReviewFormData = {
    productCategory: 'book',
    productName: '',
    title: '',
    text: '',
    authorScore: 5,
    imageUrl: null,
    tags: []
}

const ReviewCreatePage = () => {
    // const { t } = useTranslation()
    const userId = useNumberParam('userId')!
    const navigate = useNavigate()

    const publish = async (review: ReviewFormData) => {
        const id = await createReview(review, userId)
        navigate('/review/' + id)
    }

    return <>
        <ReviewForm
            defaultReview={defaultReview}
            submit={publish}
        />
    </>
}

export default ReviewCreatePage