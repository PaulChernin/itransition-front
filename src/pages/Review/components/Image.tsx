import { Image as ChakraImage } from "@chakra-ui/react"

type ImageProps = {
    url: string | null
}

const Image = ({ url }: ImageProps) => {
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

export default Image