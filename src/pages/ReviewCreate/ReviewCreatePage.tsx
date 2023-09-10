import ReviewEditor from "../../components/ReviewEditor/ReviewEditor"
import { Review } from "../../components/ReviewEditor/types/review"
import {  VStack } from "@chakra-ui/react"
import { createReview } from "./api/api"
// import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useNumberParam } from "../../hooks/useNumberParam"

const defaultReview: Review = {
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

    const publish = async (review: Review) => {
        const id = await createReview(review, userId)
        navigate('/review/' + id)
    }

    return <>
        <VStack spacing={4} align='left'>
            <ReviewEditor
                defaultReview={defaultReview}
                submit={publish}
            />
        </VStack>
    </>
}

export default ReviewCreatePage