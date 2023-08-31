import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Menu from "./Menu"
import { useTranslation } from "react-i18next"

const Header = () => {
    const { t } = useTranslation()

    return <>
        <Flex
            as='header'
            mb={4}
            py={3}
            justifyContent='space-between'
            alignItems='center'
            borderBottom={2}
            borderStyle='solid'
            borderColor={useColorModeValue('gray.200', 'gray.800')}
        >
            <Link to='/feed/best'>
                <Box fontSize='lg' fontWeight='bold'>{t('all-reviews')}</Box>
            </Link>
            <Menu/>
        </Flex>
    </>
}

export default Header