import { Flex, Switch, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const ThemeModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t } = useTranslation()

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            direction='row'
        >
            <div>{t('menu.dark-mode')}:</div>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />
        </Flex>
    )
}

export default ThemeModeSwitcher