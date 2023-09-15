import { VStack } from "@chakra-ui/react"
import PreviewsListItem from "./PreviewsListItem"
import { Review } from "@/types/Review"

type PreviewsListProps = {
    previews: Array<Review>
}

const PreviewsList = ({ previews }: PreviewsListProps) => {
    return <>
        <VStack gap={3}>
            {previews.map(preview =>
                <PreviewsListItem
                    preview={preview}
                    key={preview.id}
                />
            )}
        </VStack>
    </>
}

export default PreviewsList