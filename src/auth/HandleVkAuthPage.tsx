import { useSearchParams } from "react-router-dom"


const VkAuthHandlePage = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams)
    return <>
        <div>redirected</div>
    </>
}

export default VkAuthHandlePage