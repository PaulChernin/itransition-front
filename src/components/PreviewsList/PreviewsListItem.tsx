import { Button, Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../ProductCard/ProductCard"
import { Preview } from "./types/Preview"
import { useNavigate } from "react-router-dom"
import TagsList from "../../ui/TagsList"
import { useTranslation } from "react-i18next"
import Card from "@/ui/Card"

type PreviewsListItemProps = {
    preview: Preview
}
const PreviewsListItem = ({ preview }: PreviewsListItemProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const openReview = () => {
        navigate('/review/' + preview.id)
    }

    return <>
        <Card>
            <VStack spacing={3} alignItems='flex-start'>
                <Heading as='h2' size='md'>
                    {preview.title}
                </Heading>
                <ProductCard product={preview.product} />
                {preview.tags.length &&
                    <TagsList tags={preview.tags} />
                }
                <Button onClick={openReview}>
                    {t('read')}
                </Button>
            </VStack>
        </Card>
    </>
}

export default PreviewsListItem