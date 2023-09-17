import { Box, Container, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Menu from "./Menu"
import { useTranslation } from "react-i18next"

const Header = () => {
    const { t } = useTranslation()

    return <>
        <Box
            mb={4}
            boxShadow='sm'
            position='sticky'
            top={0}
            bgColor='var(--chakra-colors-chakra-body-bg)'
            zIndex={5}
        >
            <Container maxWidth='container.md'>
                <Flex
                    as='header'
                    justifyContent='space-between'
                    alignItems='center'
                    py={3}
                >
                    <Link to='/feed/best'>
                        <Box fontSize='lg' fontWeight='bold'>{t('all-reviews')}</Box>
                    </Link>
                    <Menu/>
                </Flex>
            </Container>
        </Box>
    </>
}

export default Header