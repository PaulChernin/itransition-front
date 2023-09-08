import { useState } from "react"
import ReviewEditor from "../../components/ReviewEditor/ReviewEditor"
import { Review } from "../../components/ReviewEditor/types/review"
import {  VStack } from "@chakra-ui/react"
import ProductEditor, { Product } from "./components/ProductEditor"
import { createReview } from "./api/api"
// import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useNumberParam } from "../../hooks/useNumberParam"

const defaultReview = {
    title: '',
    text: '',
    authorScore: 5,
    imageUrl: null,
    tags: []
}

const defaultProduct = {
    name: '',
    category: 'book'
}

const ReviewCreatePage = () => {
    const [product, setProduct] = useState<Product>(defaultProduct)
    // const { t } = useTranslation()
    const userId = useNumberParam('userId')!
    const navigate = useNavigate()

    const publish = async (review: Review) => {
        console.log(review)
        const id = await createReview(product, review, userId)
        navigate('/review/' + id)
    }

    return <>
        <VStack spacing={4} align='left'>
            <ProductEditor
                product={product}
                setProduct={setProduct}
            />
            <ReviewEditor
                defaultReview={defaultReview}
                submit={publish}
            />
        </VStack>
    </>
}

export default ReviewCreatePage