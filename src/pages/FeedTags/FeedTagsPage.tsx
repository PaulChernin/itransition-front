import { useState } from "react"
import { getReviewsByTag } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import TagsCloud from "./components/TagsCloud"
import { Review } from "@/types/Review"
import { Center, Spinner, VStack } from "@chakra-ui/react"

const FeedTagsPage = () => {
    const [previews, setPreviews] = useState<Array<Review>>([])
    const [isLoading, setIsLoading] = useState(false)

    const load = async (tag: string) => {
        setIsLoading(true)
        setPreviews(await getReviewsByTag(tag))
        setIsLoading(false)
    }
    
    return <>
        <VStack gap={4}>
            <TagsCloud select={load} />
            {isLoading
                ? <Center><Spinner/></Center>
                : <PreviewsList previews={previews} />
            }
        </VStack>
    </>
}

export default FeedTagsPage