import { HStack, Tag } from "@chakra-ui/react"

type TagsListProps = {
    tags: Array<string>
}

const TagsList = ({ tags }: TagsListProps) => {
    return <>
        <HStack spacing={2}>
            {tags.map(tag =>
                <Tag key={tag}>{tag}</Tag>    
            )}
        </HStack>
    </>
}

export default TagsList