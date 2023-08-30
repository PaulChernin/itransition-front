import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Menu from "./Menu"

const Header = () => {
    return <>
        <Flex
            as='header'
            mb={4}
            py={3}
            borderBottom={1}
            justifyContent='space-between'
            alignItems='center'
            borderStyle='solid'
            borderColor={useColorModeValue('gray.800', 'gray.200')}
        >
            <Link to='/feed/best'>
                <Box fontSize='lg' fontWeight='bold'>All Reviews</Box>
            </Link>
            <Menu/>
        </Flex>
    </>
}

export default Header