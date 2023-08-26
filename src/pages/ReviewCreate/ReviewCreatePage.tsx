import { useState } from "react"
import ReviewEditor from "../../components/ReviewEditor/ReviewEditor"
import { Review } from "../../components/ReviewEditor/types/review"
import { Button } from "@chakra-ui/react"
import api from "../../api/api"

const ReviewCreatePage = () => {
    const [review, setReview] = useState<Review>({
        title: '',
        category: 1,
        product: '',
        text: '',
        authorScore: 5
    })

    const publish = () => {
        api.post('/review/create', review)
    }

    return <>
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