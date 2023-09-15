import { Box, useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

const CardContrast = ({ children }: CardProps) => {
    return <>
        <Box
            padding={5}
            bgColor={useColorModeValue('gray.100', 'gray.900')}
            width='100%'
        >
            { children }
        </Box>
    </>
}

export default CardContrast