import { useState } from "react"
import ReviewEditor from "../../components/ReviewEditor/ReviewEditor"
import { Review } from "../../components/ReviewEditor/types/review"
import { Button } from "@chakra-ui/react"
import ProductEditor, { Product } from "./components/ProductEditor"
import { createReview } from "./api/api"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"

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
    const [review, setReview] = useState<Review>(defaultReview)
    const [product, setProduct] = useState<Product>(defaultProduct)
    const { t } = useTranslation()
    const { userId } = useParams()
    const navigate = useNavigate()

    const publish = async () => {
        const id = await createReview(product, review, userId ? parseInt(userId) : 0) // TODO
        navigate('/review/' + id)
    }

    return <>
        <ProductEditor
            product={product}
            setProduct={setProduct}
        />
        <ReviewEditor
            review={review}
            setReview={setReview}
        />
        <Button
            onClick={publish}
            marginTop={3}
        >
            {t('publish')}   
        </Button>
    </>
}

export default ReviewCreatePage