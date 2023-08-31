import { useEffect, useState } from "react"
import ReviewsTable from "./ReviewsTable"
import { Review } from "./types/Review"
import ReviewsTableControls from "./ReviewsTableControls"
import { TableControls } from "./types/TableControls"
import { getReviews } from "./api/api"

type ReviewsProps = {
    userId: number
}

const defaultControls: TableControls = {
    category: 1,
    sortBy: 'date'
}

const Reviews = ({ userId }: ReviewsProps) => {
    const [controls, setControls] = useState<TableControls>(defaultControls)
    const [reviews, setReviews] = useState<Array<Review>>([])
    
    useEffect(() => {
        getReviews(userId, controls)
            .then(reviews => {
                setReviews(reviews)
            })
    }, [userId])

    return <>
        <ReviewsTableControls controls={controls} />
        <ReviewsTable reviews={reviews} />
    </>
}

export default Reviews