import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import ProductCard from "../../../components/ProductCard/ProductCard"
import { Review } from "./types/Review"
import { useNavigate } from "react-router-dom"

type ReviewArticleProps = {
    review: Review
}

const ReviewArticle = ({ review }: ReviewArticleProps) => {
    const navigate = useNavigate()

    return <>
        <Heading as='h1' size='lg' marginBottom={4}>
            {review.title}
        </Heading>
        <Box marginBottom={4}>
            Author: {review.author.nick}
        </Box>
        <ProductCard
            product={review.product}
        />
        <Box marginY={4}>{review.text}</Box>
        <Box fontSize='2em' marginBottom={4}>
            {review.authorsScore} / 10
        </Box>
        <Flex alignItems='center' gap={5}>
            <div>{review.likesCount} likes</div>
            <Button onClick={() => navigate('/comments/' + review.id)}>
                Comments
            </Button>
        </Flex>
    </>
}

export default ReviewArticle