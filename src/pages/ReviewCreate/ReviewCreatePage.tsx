import { useState } from "react"
import ReviewEditor from "../../components/ReviewEditor/ReviewEditor"
import { Review } from "../../components/ReviewEditor/types/review"
import { Button } from "@chakra-ui/react"
import ProductEditor, { Product } from "./components/ProductEditor"
import { createReview } from "./api/api"

const defaultReview = {
    title: '',
    text: '',
    authorScore: 5
}

const defaultProduct = {
    name: '',
    category: 1
}

const ReviewCreatePage = () => {
    const [review, setReview] = useState<Review>(defaultReview)
    const [product, setProduct] = useState<Product>(defaultProduct)

    const publish = async () => {
        await createReview(product, review)
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
        >
            Publish
        </Button>
    </>
}

export default ReviewCreatePage