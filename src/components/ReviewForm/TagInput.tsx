import { Button, HStack,  Tag, TagCloseButton, TagLabel, Text, VStack } from "@chakra-ui/react"
import {  useEffect, useState } from "react"
import SearchSelect from "../../ui/Select/SearchSelect"
import { getTagsByPrefix } from "./api/api"
import { useTranslation } from "react-i18next"

type TagInputProps = {
    tags: Array<string>,
    setTags: (value: Array<string>) => void
}

// TODO: разделить на компоненты
const TagInput = ({ tags, setTags }: TagInputProps) => {
    const { t } = useTranslation()
    const [input, setInput] = useState('')
    const [options, setOptions] = useState<Array<string>>([])

    const add = (value: string) => {
        if (!tags.includes(value)) {
            setTags([...tags, value])
        }
        setInput('')
    }

    const remove = (tag: string) => {
        setTags(tags.filter(t => t !== tag))
    }

    const loadOptions = async (prefix: string) => {
        setOptions(await getTagsByPrefix(prefix))
    }

    useEffect(() => {
        if (input) {
            loadOptions(input)
        } else {
            setOptions([])
        }
    }, [input])
    
    return <>
        <VStack spacing={3} align='left'>
            <HStack spacing={2}>
                {tags.map(tag =>
                    <Tag
                        key={tag}
                        size='lg'
                    >
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => remove(tag)} />
                    </Tag>
                )}
                {tags.length ||
                    <Text>{t('review-form.no-tags-selected')}</Text>
                }
            </HStack>
            <HStack spacing={3}>
                <SearchSelect
                    input={input}
                    onInput={setInput}
                    options={options.map(tag => ({ value: tag, label: tag }))}
                    onSelect={option => setInput(option.label)}
                />
                <Button onClick={() => add(input)}>
                    {t('review-form.add')}
                </Button>
            </HStack>
        </VStack>
    </>
}

export default TagInput