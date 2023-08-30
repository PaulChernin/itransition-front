import { Flex, Switch, useColorMode } from "@chakra-ui/react"

const ThemeModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            direction='row'
        >
            <div>Dark mode:</div>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />
        </Flex>
    )
}

export default ThemeModeSwitcher