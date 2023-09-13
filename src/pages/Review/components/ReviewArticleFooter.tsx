import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Likes from "./LikesButton"
import { Review } from "./types/Review"
import { useTranslation } from "react-i18next"

type ReviewArticleFooterProps = {
    review: Review
}

const ReviewArticleFooter = ({ review }: ReviewArticleFooterProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const openComments = () => {
        navigate('/comments/' + review.id)
    }
    
    return <>
        <Flex alignItems='center' gap={5}>
            <Likes review={review}/>
            <Button onClick={openComments}>
                {t('comments')}
            </Button>
        </Flex>
    </>
}

export default ReviewArticleFooter