import { Flex, useColorModeValue } from "@chakra-ui/react"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import ThemeModeSwitcher from "../ThemeModeSwitcher/ThemeModeSwitcher"

const Header = () => {
    return <>
        <Flex
            as='header'
            p={2}
            borderBottom={1}
            borderStyle='solid'
            borderColor={useColorModeValue('gray.800', 'gray.200')}
        >
            <LanguageSwitcher/>
            <ThemeModeSwitcher/>
        </Flex>
    </>
}

export default Header