import { Button, Flex, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Menu from "./Menu"

const Header = () => {
    return <>
        <Flex
            as='header'
            p={2}
            borderBottom={1}
            borderStyle='solid'
            borderColor={useColorModeValue('gray.800', 'gray.200')}
        >
            <Link to='/feed/best'><Button>All Reviews</Button></Link>
            <Menu/>
        </Flex>
    </>
}

export default Header