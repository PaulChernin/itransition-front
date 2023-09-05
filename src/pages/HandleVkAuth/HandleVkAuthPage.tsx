import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { handleSilentToken } from "../../auth/vkAuth"

const VkAuthHandlePage = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        handleSilentToken(searchParams.get('payload') || '') // TODO
            .then((user) => {
                navigate('/user/' + user.id)
            })
    }, [])


    return <>
        <div>Loading...</div>
    </>
}

export default VkAuthHandlePage