import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { handleSilentToken } from "../../auth/vkAuth"
import { useProfileStore } from "../../hooks/profile/useProfileStore"

const VkAuthHandlePage = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { setProfile } = useProfileStore()

    useEffect(() => {
        handleSilentToken(searchParams.get('payload') || '') // TODO
            .then((profile) => {
                if (profile) {
                    setProfile(profile)
                    navigate('/my-reviews')
                }
            })
    }, [])


    return <>
        <div>Loading...</div>
    </>
}

export default VkAuthHandlePage