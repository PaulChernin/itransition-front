import { Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../../../components/ProductCard/ProductCard"
import TagsList from "../../../ui/TagsList"
// import { useTranslation } from "react-i18next"
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
    // const { t } = useTranslation()

    return <>
        <VStack spacing={4} align='left'>
            <Heading as='h1' size='xl'>
                {review.title}
            </Heading>
            <AuthorBlock user={review.author} />
            <ProductCard product={review.product} />
            <ArticleImage url={review.imageUrl} />
            <ReactMarkdown children={review.text} />
            <ScoreText score={review.authorsScore} />
            <TagsList tags={review.tags} />
            <ReviewArticleFooter review={review} />
        </VStack>
    </>
}

export default ReviewArticle