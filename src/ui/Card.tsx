import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

const Card = ({ children }: CardProps) => {
    return <>
        <Box
            as='article'
            w='100%'
            boxShadow='base'
            paddingX={4}
            paddingY={5}
        >
            { children }
        </Box>
    </>
}

export default Card