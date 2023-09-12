import { useEffect, useState } from "react"
import ReviewsTable from "./ReviewsTable"
import { Review } from "./types/Review"
import ReviewsTableControls from "./ReviewsTableControls"
import { TableControls } from "./types/TableControls"
import { getReviews, removeReview } from "./api/api"
import { useNavigate } from "react-router-dom"
import { Button, Text, VStack } from "@chakra-ui/react"

type ReviewsProps = {
    userId: number
}

const defaultControls: TableControls = {
    category: 'book',
    sortBy: 'date'
}

const ReviewsManager = ({ userId }: ReviewsProps) => {
    const navigate = useNavigate()
    const [controls, setControls] = useState<TableControls>(defaultControls)
    const [reviews, setReviews] = useState<Array<Review>>([])

    const loadReviews = async (userId: number, controls: TableControls) => {
        setReviews(await getReviews(userId, controls))
    }
    
    useEffect(() => {
        loadReviews(userId, controls)
    }, [userId, controls])

    const remove = async (id: number) => {
        await removeReview(id)
        loadReviews(userId, controls)
    }

    const openCreate = () => {
        navigate('/review-create/' + userId)
    }

    return <>
        <VStack spacing={3} alignItems='flex-start'>
            <Button onClick={openCreate}>
                New review
            </Button>
            <ReviewsTableControls
                controls={controls}
                setControls={setControls}
            />
            {reviews.length ?
                <ReviewsTable
                    reviews={reviews}
                    remove={remove}
                />
                :
                <Text>No reviews yet</Text>
            }
        </VStack>
    </>
}

export default ReviewsManager