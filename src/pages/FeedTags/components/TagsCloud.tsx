import { useEffect, useState } from 'react'
import { TagCloud } from 'react-tagcloud'
import { getPopularTags } from '../api/api'
import { Tag } from '../types/tag'

type TagsCloudProps = {
    select: (tag: string) => void
}

const TagsCloud = ({ select }: TagsCloudProps) => {
    const [tags, setTags] = useState<Array<Tag>>([])

    const loadTags = async () => {
        setTags(await getPopularTags())
    }

    useEffect(() => {
        loadTags()
    }, [])
    
    return <>
        <TagCloud
            minSize={20}
            maxSize={35}
            tags={tags}
            className="simple-cloud"
            onClick={(tag: Tag) => select(tag.value)}
        />
    </>
}

export default TagsCloud