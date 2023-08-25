import { Button, useColorMode } from "@chakra-ui/react"

const ThemeModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button onClick={toggleColorMode}>
            Toggle Dark Mode
        </Button>
    )
}

export default ThemeModeSwitcher