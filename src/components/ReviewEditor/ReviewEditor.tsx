import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { Review } from "./types/review"
import { useTranslation } from "react-i18next"
import ImageUploader from "../ImageUploader/ImageUploader"
import TagInput from "./TagInput"

type ReviewEditorProps = {
    review: Review,
    setReview: (review: Review) => void
}

const ReviewEditor = ({ review, setReview }: ReviewEditorProps) => {
    const { t } = useTranslation()
    
    return <>
        <FormControl>
            <FormLabel>{t('title')}</FormLabel>
            <Input
                value={review.title}
                onChange={e => setReview({...review, title: e.target.value})}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Tags</FormLabel>
            <TagInput
                tags={review.tags}
                setTags={value => setReview({...review, tags: value})}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Image</FormLabel>
            <ImageUploader setUrl={value => setReview({...review, imageUrl: value})}/>
        </FormControl>
        <FormControl>
            <FormLabel>{t('text')}</FormLabel>
            <Textarea
                value={review.text}
                onChange={e => setReview({...review, text: e.target.value})}
            />
        </FormControl>
        <FormControl>
            <FormLabel>{t('score')}</FormLabel>
            <Input
                type='number'
                value={review.authorScore}
                onChange={e => setReview({...review, authorScore: parseInt(e.target.value)})}
            />
        </FormControl>
    </>
}

export default ReviewEditor