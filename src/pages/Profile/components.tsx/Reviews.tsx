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
    category: 'book',
    sortBy: 'date'
}

const Reviews = ({ userId }: ReviewsProps) => {
    const [controls, setControls] = useState<TableControls>(defaultControls)
    const [reviews, setReviews] = useState<Array<Review>>([])

    const loadReviews = async (userId: number, controls: TableControls) => {
        setReviews(await getReviews(userId, controls))
    }
    
    useEffect(() => {
        loadReviews(1, controls)
    }, [userId, controls])

    return <>
        <ReviewsTableControls
            controls={controls}
            setControls={setControls}    
        />
        <ReviewsTable reviews={reviews} />
    </>
}

export default Reviews