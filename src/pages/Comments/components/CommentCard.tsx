import { Comment } from "./types/Comment"

type CommentCardProps = {
    comment: Comment
}

const CommentCard = ({ comment }: CommentCardProps) => {
    return <>
        <div>{comment.user.nick}</div>
        <div>{comment.text}</div>
    </>
}

export default CommentCard