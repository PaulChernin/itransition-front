import { useEffect, useState } from 'react'
import { TagCloud } from 'react-tagcloud'
import { getPopularTags } from '../api/api'

const TagsCloud = () => {
    const [tags, setTags] = useState<Array<string>>([])

    const loadTags = async () => {
        setTags(await getPopularTags())
    }

    useEffect(() => {
        loadTags()
    }, [])
    
    return <>
        <TagCloud
            minSize={2}
            maxSize={35}
            tags={tags}
            className="simple-cloud"
            onClick={(e) => console.log(e)}
        />
    </>
}

export default TagsCloud