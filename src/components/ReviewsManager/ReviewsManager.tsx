import { useEffect, useState } from "react"
import ReviewsTable from "./ReviewsTable"
import ReviewsTableControls from "./ReviewsTableControls"
import { TableControls } from "./types/TableControls"
import { getReviews, removeReview } from "./api/api"
import { useNavigate } from "react-router-dom"
import { Button, Text, VStack } from "@chakra-ui/react"
import { Review } from "@/types/Review"
import { useTranslation } from "react-i18next"

type ReviewsProps = {
    userId: number
}

const defaultControls: TableControls = {
    category: 'book',
    sortBy: 'date'
}

const ReviewsManager = ({ userId }: ReviewsProps) => {
    const { t } = useTranslation()
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
        <VStack spacing={4} alignItems='flex-start'>
            <Button onClick={openCreate}>
                {t('reviews-manager.new-review')}
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
                <Text>{t('reviews-manager.no-reviews')}</Text>
            }
        </VStack>
    </>
}

export default ReviewsManager