import { Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../../../components/ProductCard/ProductCard"
import TagsList from "../../../ui/TagsList"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import ArticleImage from "./ArticleImage"
import ScoreText from "./ScoreText"
import ReviewArticleFooter from "./ReviewArticleFooter"
import { Review } from "@/types/Review"
import AuthorBlock from "./AuthorBlock"

type ReviewArticleProps = {
    review: Review
}

const ReviewArticle = ({ review }: ReviewArticleProps) => {
    return <>
        <VStack spacing={4} align='left'>
            <Heading as='h1' size='xl' marginY={6}>
                {review.title}
            </Heading>
            <AuthorBlock user={review.author} />
            <ProductCard product={review.product} />
            <ReactMarkdown children={review.text} />
            <ArticleImage url={review.imageUrl} />
            <ScoreText score={review.authorsScore} />
            <TagsList tags={review.tags} />
            <ReviewArticleFooter review={review} />
        </VStack>
    </>
}

export default ReviewArticle