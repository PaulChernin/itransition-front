import { useState } from "react"
import { getReviewsByTag } from "./api/api"
import PreviewsList from "../../components/PreviewsList/PreviewsList"
import TagsCloud from "./components/TagsCloud"
import { Review } from "@/types/Review"
import { VStack } from "@chakra-ui/react"

const FeedTagsPage = () => {
    const [previews, setPreviews] = useState<Array<Review>>([])

    const load = async (tag: string) => {
        setPreviews(await getReviewsByTag(tag))
    }
    
    return <>
        <VStack gap={4}>
            <TagsCloud select={load} />
            <PreviewsList previews={previews} />
        </VStack>
    </>
}

export default FeedTagsPage