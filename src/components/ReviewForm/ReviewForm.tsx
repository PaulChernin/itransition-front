import { Button, Input, VStack } from "@chakra-ui/react"
import { Review } from "./types/review"
import { useTranslation } from "react-i18next"
import ImageUploader from "../ImageUploader/ImageUploader"
import TagInput from "./TagInput"
import InputNumber from "../../ui/InputNumber"
import { useState } from "react"
import FormElement from "../../ui/FormElement"
import { ValidationError, array, number, object, string } from "yup"
import { SimpleMdeReact } from "react-simplemde-editor"
import CategorySelect from "../CategorySelect/CategorySelect"

type ReviewFormProps = {
    defaultReview: Review,
    submit: (review: Review) => void
}

const reviewSchema = object({
    productCategory: string().required(),
    productName: string().required(),
    title: string().required().trim(),
    text: string().required().trim(),
    authorScore: number().required().min(1).max(10),
    imageUrl: string().defined().nullable(),
    tags: array().of(string().required()).required()
})

const ReviewForm = ({ defaultReview, submit }: ReviewFormProps) => {
    const { t } = useTranslation()
    const [review, setReview] = useState(defaultReview)
    const [errors, setErrors] = useState<Array<string>>([])

    const handleSubmit = () => {
        try {
            const result = reviewSchema.validateSync(review, {
                abortEarly: false
            })
            submit(result)
        } catch (e) {
            console.log(e)
            if (e instanceof ValidationError) {
                setErrors(e.inner.map(error => error.path!))
            }
        }
    }
    
    return <>
        <VStack spacing={4}>
            <FormElement label='Product'>
                <CategorySelect
                    category={review.productCategory}
                    setCategory={value => setReview({...review, productCategory: value})}
                />
            </FormElement>
            <FormElement
                label='Product name'
                isInvalid={errors.includes('productName')}
                errorMessage='Product name is required'
            >
                <Input
                    value={review.productName}
                    onChange={e => setReview({...review, productName: e.target.value})}
                />
            </FormElement>
            <FormElement
                label={t('title')}
                isInvalid={errors.includes('title')}
                errorMessage='Title is required'
            >
                <Input
                    value={review.title}
                    onChange={e => setReview({...review, title: e.target.value})}
                />
            </FormElement>
            <FormElement
                label={t('text')}
                isInvalid={errors.includes('text')}
                errorMessage='Text is required'
            >
                <SimpleMdeReact
                    value={review.text}
                    onChange={v => setReview({...review, text: v})}
                />
            </FormElement>
            <FormElement
                label={t('score')}
                isInvalid={errors.includes('authorScore')}
                errorMessage='Provide score from 1 to 10'
            >
                <InputNumber
                    value={review.authorScore}
                    setValue={value => setReview({...review, authorScore: value})}
                />
            </FormElement>
            <FormElement label='Tags'>
                <TagInput
                    tags={review.tags}
                    setTags={value => setReview({...review, tags: value})}
                />
            </FormElement>
            <FormElement label='Image'>
                <ImageUploader setUrl={value => setReview({...review, imageUrl: value})}/>
            </FormElement>
            <Button type='submit' onClick={handleSubmit}>
                Submit
            </Button>
        </VStack>
    </>
}

export default ReviewForm