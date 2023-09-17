import { Image as ChakraImage } from "@chakra-ui/react"

type ArticleImageProps = {
    url: string | null
}

const ArticleImage = ({ url }: ArticleImageProps) => {
    return <>
        {url &&
            <ChakraImage
                src={url}
                height='100%'
                objectFit='cover'
            />
        }
    </>
}

export default ArticleImage