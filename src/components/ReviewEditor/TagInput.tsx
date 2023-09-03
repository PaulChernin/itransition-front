import { Button, HStack, Input, Tag, TagLabel, VStack } from "@chakra-ui/react"
import TagAutocomplete from "./TagAutocomplete"
import { useState } from "react"

type TagInputProps = {
    tags: Array<string>,
    setTags: (value: Array<string>) => void
}

const TagInput = ({ tags, setTags }: TagInputProps) => {
    const [value, setValue] = useState('')

    console.log(tags)

    const add = () => {
        setTags([...tags, value])
    }

    const remove = (tag: string) => {
        setTags(tags.filter(t => t !== tag))
    }
    
    return <>
        <VStack spacing={3} align='left'>
            <HStack spacing={2}>
                {tags.map(tag =>
                    <Tag
                        key={tag}
                        onClick={() => remove(tag)}
                    >
                        <TagLabel>{tag}</TagLabel>
                    </Tag>
                )}
            </HStack>
            <HStack spacing={3}>
                <Input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    width={'200px'}
                />
                <Button onClick={add}>
                    Add
                </Button>
            </HStack>
        </VStack>
    </>
}

export default TagInput