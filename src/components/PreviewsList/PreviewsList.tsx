import { VStack } from "@chakra-ui/react"
import PreviewCard from "./PreviewCard"
import { Preview } from "./types/Preview"

type PreviewsListProps = {
    previews: Array<Preview>
}

const PreviewsList = ({ previews }: PreviewsListProps) => {
    return <>
        <VStack gap={3}>
            {previews.map(preview =>
                <PreviewCard
                    preview={preview}
                    key={preview.id}
                />
            )}
        </VStack>
    </>
}

export default PreviewsList