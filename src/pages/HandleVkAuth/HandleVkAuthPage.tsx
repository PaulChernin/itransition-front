import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { handleSilentToken } from "../../auth/vkAuth"
import { useProfileStore } from "../../hooks/profile/useProfileStore"
import { Center, Spinner } from "@chakra-ui/react"

const VkAuthHandlePage = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { setProfile } = useProfileStore()

    useEffect(() => {
        handleSilentToken(searchParams.get('payload') || '')
            .then((profile) => {
                if (profile) {
                    setProfile(profile)
                    navigate('/my-reviews')
                }
            })
    }, [])


    return <>
        <Center><Spinner/></Center>
    </>
}

export default VkAuthHandlePage