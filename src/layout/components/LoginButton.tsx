import { Button, VStack } from "@chakra-ui/react"
import { useProfileStore } from "../../hooks/profile/useProfileStore"
import { redirectAuth } from "../../auth/vkAuth"
import { useTranslation } from "react-i18next"

const LoginButton = () => {
    const { t } = useTranslation()
    const { profile, setProfile } = useProfileStore()
    
    const login = async () => {
        redirectAuth()
    }

    const logout = () => {
        setProfile(null)
    }
    
    return <>
        {profile
            ?
            <Button onClick={logout}>
                {t('menu.log-out')}
            </Button>
            :
            <VStack gap={3}>
                <Button onClick={login}>
                    {t('menu.log-in-with-vk')}
                </Button>
            </VStack>
        }
    </>
}

export default LoginButton