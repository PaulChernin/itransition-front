import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../../../components/ProductCard/ProductCard"
import { Review } from "./types/Review"
import { useNavigate } from "react-router-dom"
import TagsList from "../../../components/TagsList/TagsList"

type ReviewArticleProps = {
    review: Review
}

const ReviewArticle = ({ review }: ReviewArticleProps) => {
    const navigate = useNavigate()

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
            <Box>{review.text}</Box>
            <Box fontSize='2em'>
                {review.authorsScore} / 10
            </Box>
            <TagsList tags={review.tags} />
            <Flex alignItems='center' gap={5}>
                <div>{review.likesCount} likes</div>
                <Button onClick={() => navigate('/comments/' + review.id)}>
                    Comments
                </Button>
            </Flex>
        </VStack>
    </>
}

export default ReviewArticle