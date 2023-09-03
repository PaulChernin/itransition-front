import { Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeModeSwitcher from "./ThemeModeSwitcher"
import Login from "./Login"

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <>
        <Button onClick={onOpen}>Menu</Button>
        <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement="right"
        >
            <DrawerOverlay/>
            <DrawerContent
                p={5}
                gap={4}
            >
                <LanguageSwitcher/>
                <ThemeModeSwitcher/>
                <Login/>
            </DrawerContent>
        </Drawer>
    </>
}

export default Menu