import { Button } from "@chakra-ui/react"
import { useProfileStore } from "../../hooks/profile/useProfileStore"

const Login = () => {
    const setProfile = useProfileStore(state => state.setProfile)
    
    const login = () => {
        setProfile({
            userId: 3,
            userNick: 'Joe',
            isAdmin: false
        })
    }
    
    return <>
        <Button onClick={login}>
            Log in
        </Button>
    </>
}

export default Login