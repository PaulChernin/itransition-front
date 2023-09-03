import { Button } from "@chakra-ui/react"
import { useProfile } from "../../hooks/profile/useProfile"


const Login = () => {
    const { setProfile } = useProfile()
    
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