import { useSearchParams } from "react-router-dom"


const VkAuthHandlePage = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('payload'))



    return <>
        <div>redirected</div>
    </>
}

export default VkAuthHandlePage