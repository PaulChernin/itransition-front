import { useEffect, useState } from "react"
import CommentsList from "./components/CommentsList"
import { Comment } from "./components/types/Comment"
import { createComment, getComments } from "./api/api"
import CommentSender from "./components/CommentSender"
import { useProfileStore } from "../../hooks/profile/useProfileStore"
import { Text } from "@chakra-ui/react"
import { useNumberParam } from "../../hooks/useNumberParam"

const CommentsPage = () => {
    const reviewId = useNumberParam('reviewId')!
    const [comments, setComments] = useState<Array<Comment>>([])
    const { profile } = useProfileStore()

    const update = () => {
        getComments(reviewId)
        .then(comments => {
            setComments(comments)
        })
    }
    
    useEffect(() => {
        update()
    }, [reviewId])

    const send = async (text: string) => {
        await createComment(reviewId, text, profile?.userId || 0) // TODO
        update()
    }

    return <>
        <CommentsList comments={comments} />
        {profile
            ?
            <CommentSender send={send} />
            :
            <Text marginTop={6}>
                Log in to leave comments
            </Text>
        }
    </>
}

export default CommentsPage