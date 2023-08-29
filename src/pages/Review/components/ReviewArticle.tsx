import ProductCard from "../../../components/ProductCard/ProductCard"
import { Review } from "./types/Review"

type ReviewArticleProps = {
    review: Review
}

const ReviewArticle = ({ review }: ReviewArticleProps) => { 
    return <>
        <div>{review.title}</div>
        <div>By {review.author.nick}</div>
        <ProductCard product={review.product} />
        <div>{review.text}</div>
        <div>{review.authorsScore} / 10</div>
        <div>{review.likesCount} likes</div>
    </>
}

export default ReviewArticle