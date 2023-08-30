import { Box, Button, Heading } from "@chakra-ui/react"
import ProductCard from "../ProductCard/ProductCard"
import { Preview } from "./types/Preview"
import { useNavigate } from "react-router-dom"

type PreviewCardProps = {
    preview: Preview
}

const PreviewCard = ({ preview }: PreviewCardProps) => {
    const navigate = useNavigate()

    return <>
        <Box
            as='article'
            w='100%'
            boxShadow='base'
            paddingX={4}
            paddingY={5}
        >
            <Heading
                as='h2'
                size='md'
                marginBottom={3}
            >
                {preview.title}
            </Heading>
            <ProductCard product={preview.product} />
            <Button
                onClick={() => navigate('/review/' + preview.id)}
                marginTop={2}
            >
                Read
            </Button>
        </Box>
    </>
}

export default PreviewCard