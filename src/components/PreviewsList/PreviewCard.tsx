import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import ProductCard from "../ProductCard/ProductCard"
import { Preview } from "./types/Preview"
import { useNavigate } from "react-router-dom"
import TagsList from "../TagsList/TagsList"
import { useTranslation } from "react-i18next"

type PreviewCardProps = {
    preview: Preview
}

const PreviewCard = ({ preview }: PreviewCardProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return <>
        <Box
            as='article'
            w='100%'
            boxShadow='base'
            paddingX={4}
            paddingY={5}
        >
            <VStack spacing={3} alignItems='flex-start'>
                <Heading
                    as='h2'
                    size='md'
                >
                    {preview.title}
                </Heading>
                <ProductCard product={preview.product} />
                {preview.tags.length &&
                    <TagsList
                        tags={preview.tags}
                    />
                }
                <Button
                    onClick={() => navigate('/review/' + preview.id)}
                >
                    {t('read')}
                </Button>
            </VStack>
        </Box>
    </>
}

export default PreviewCard