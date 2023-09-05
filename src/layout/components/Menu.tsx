import { Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeModeSwitcher from "./ThemeModeSwitcher"
import LoginButton from "./LoginButton"
import { useNavigate } from "react-router-dom"
import { useProfileStore } from "../../hooks/profile/useProfileStore"

const Menu = () => {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const profile = useProfileStore(state => state.profile)

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
                <LoginButton/>
                {profile?.isAdmin &&
                    <Button onClick={() => navigate('/admin')}>
                        Users list
                    </Button>
                }
                {profile &&
                    <Button onClick={() => navigate('my-reviews')}>
                        My reviews
                    </Button>
                }
            </DrawerContent>
        </Drawer>
    </>
}

export default Menu