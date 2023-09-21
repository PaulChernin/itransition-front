import { Button, Drawer, DrawerContent, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeModeSwitcher from "./ThemeModeSwitcher"
import LoginButton from "./LoginButton"
import { useNavigate } from "react-router-dom"
import { useProfileStore } from "../../hooks/profile/useProfileStore"
import { AiOutlineMenu } from "react-icons/ai"
import { useTranslation } from "react-i18next"

const Menu = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const profile = useProfileStore(state => state.profile)

    return <>
        <Button onClick={onOpen}>
            <Icon as={AiOutlineMenu} />
        </Button>
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
                        {t('menu.users-list')}
                    </Button>
                }
                {profile &&
                    <Button onClick={() => navigate('my-reviews')}>
                        {t('menu.my-reviews')}
                    </Button>
                }
            </DrawerContent>
        </Drawer>
    </>
}

export default Menu