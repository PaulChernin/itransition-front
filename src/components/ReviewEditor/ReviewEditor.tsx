import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { Review } from "./types/review"

type ReviewEditorProps = {
    review: Review,
    setReview: (review: Review) => void
}

const ReviewEditor = ({ review, setReview }: ReviewEditorProps) => {
    return <>
        <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
                value={review.title}
                onChange={e => setReview({...review, title: e.target.value})}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Text</FormLabel>
            <Textarea
                value={review.text}
                onChange={e => setReview({...review, text: e.target.value})}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Score</FormLabel>
            <Input
                type='number'
                value={review.authorScore}
                onChange={e => setReview({...review, authorScore: parseInt(e.target.value)})}
            />
        </FormControl>
    </>
}

export default ReviewEditor