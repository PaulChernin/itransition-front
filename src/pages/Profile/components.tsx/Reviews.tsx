import { useEffect, useState } from "react"
import ReviewsTable from "./ReviewsTable"
import { Review } from "./types/Review"
import ReviewsTableControls from "./ReviewsTableControls"
import { TableControls } from "./types/TableControls"
import { getReviews, removeReview } from "./api/api"
import { useNavigate } from "react-router-dom"
import { Button, VStack } from "@chakra-ui/react"

type ReviewsProps = {
    userId: number
}

const defaultControls: TableControls = {
    category: 'book',
    sortBy: 'date'
}

const Reviews = ({ userId }: ReviewsProps) => {
    const navigate = useNavigate()
    const [controls, setControls] = useState<TableControls>(defaultControls)
    const [reviews, setReviews] = useState<Array<Review>>([])

    const loadReviews = async (userId: number, controls: TableControls) => {
        setReviews(await getReviews(userId, controls))
    }
    
    useEffect(() => {
        loadReviews(1, controls)
    }, [userId, controls])

    const remove = async (id: number) => {
        await removeReview(id)
        loadReviews(userId, controls)
    }

    return <>
        <VStack spacing={3} alignItems='flex-start'>
            <Button onClick={() => navigate('/review-create/' + userId)}>
                New review
            </Button>
            <ReviewsTableControls
                controls={controls}
                setControls={setControls}
            />
            <ReviewsTable
                reviews={reviews}
                remove={remove}
            />
        </VStack>
    </>
}

export default Reviews