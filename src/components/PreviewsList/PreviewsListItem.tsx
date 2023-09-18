import { Button, Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../ProductCard/ProductCard"
import { useNavigate } from "react-router-dom"
import TagsList from "../../ui/TagsList"
import { useTranslation } from "react-i18next"
import Card from "@/ui/Card"
import { Review } from "@/types/Review"
import ReactMarkdown from "react-markdown"
import markdownToTxt from "markdown-to-txt"

type PreviewsListItemProps = {
    preview: Review
}
const PreviewsListItem = ({ preview }: PreviewsListItemProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const openReview = () => {
        navigate('/review/' + preview.id)
    }

    const textPreview = markdownToTxt(preview.text).slice(0, 300) + '...'

    return <>
        <Card>
            <VStack spacing={4} alignItems='flex-start'>
                <Heading as='h2' size='md'>
                    {preview.title}
                </Heading>
                <ProductCard product={preview.product} />
                <ReactMarkdown children={textPreview} />
                {preview.tags.length &&
                    <TagsList tags={preview.tags} />
                }
                <Button colorScheme='blue' onClick={openReview}>
                    {t('feed.read')}
                </Button>
            </VStack>
        </Card>
    </>
}

export default PreviewsListItem