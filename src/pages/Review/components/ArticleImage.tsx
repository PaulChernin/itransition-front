import { Image as ChakraImage } from "@chakra-ui/react"

type ArticleImageProps = {
    url: string | null
}

const ArticleImage = ({ url }: ArticleImageProps) => {
    return <>
        {url &&
            <ChakraImage
                src={url}
                width='100%'
                height='200px'
                objectFit='cover'
            />
        }
    </>
}

export default ArticleImage