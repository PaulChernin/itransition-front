import { Button } from "@chakra-ui/react"
import { useProfileStore } from "../../hooks/profile/useProfileStore"

const LoginButton = () => {
    const { profile, setProfile } = useProfileStore()
    
    const login = () => {
        setProfile({
            userId: 3,
            userNick: 'Joe',
            isAdmin: false
        })
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
                Log in
            </Button>
        }
    </>
}

export default LoginButton