import { Button } from "@chakra-ui/react"
import { useProfileStore } from "../../hooks/profile/useProfileStore"
import { redirectAuth } from "../../auth/vkAuth"

const LoginButton = () => {
    const { profile, setProfile } = useProfileStore()
    
    const login = async () => {
        // setProfile({
        //     userId: 3,
        //     userNick: 'Joe',
        //     isAdmin: true
        // })
        redirectAuth()
    }

    const logout = () => {
        setProfile(null)
    }
    
    return <>
        {profile
            ?
            <Button onClick={logout}>
                Log out
            </Button>
            :
            <Button onClick={login}>
                Log in with VK
            </Button>
        }
    </>
}

export default LoginButton