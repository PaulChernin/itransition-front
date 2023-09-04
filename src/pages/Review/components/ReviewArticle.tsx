import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../../../components/ProductCard/ProductCard"
import { Review } from "./types/Review"
import { useNavigate } from "react-router-dom"
import TagsList from "../../../components/TagsList/TagsList"
import Likes from "./Likes"
import { useTranslation } from "react-i18next"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Image from "./Image"

type ReviewArticleProps = {
    review: Review
}

const ReviewArticle = ({ review }: ReviewArticleProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return <>
        <VStack spacing={4} align='left'>
            <Heading as='h1' size='xl'>
                {review.title}
            </Heading>
            <Box>
                Author: {review.author.nick}
            </Box>
            <ProductCard
                product={review.product}
            />
            <Image url={review.imageUrl} />
            <ReactMarkdown children={review.text} />
            <Box fontSize='2em'>
                {review.authorsScore} / 10
            </Box>
            <TagsList tags={review.tags} />
            <Flex alignItems='center' gap={5}>
                <Likes reviewId={review.id} userId={3} />
                <Button onClick={() => navigate('/comments/' + review.id)}>
                    {t('comments')}
                </Button>
            </Flex>
        </VStack>
    </>
}

export default ReviewArticle