import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentsList from "./components/CommentsList"
import { Comment } from "./components/types/Comment"
import { createComment, getComments } from "./api/api"
import CommentSender from "./components/CommentSender"

const CommentsPage = () => {
    const { reviewId } = useParams()
    const [comments, setComments] = useState<Array<Comment>>([])

    const update = () => {
        getComments(reviewId ? parseInt(reviewId) : 0)
        .then(comments => {
            setComments(comments)
        })
    }
    
    useEffect(() => {
        update()
    }, [reviewId])

    const send = async (text: string) => {
        await createComment(reviewId ? parseInt(reviewId) : 0, text)
        update()
    }

    return <>
        <CommentsList comments={comments} />
        <CommentSender send={send} />
    </>
}

export default CommentsPage