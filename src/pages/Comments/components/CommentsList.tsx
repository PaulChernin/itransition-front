import CommentCard from "./CommentCard"
import { Comment } from "./types/Comment"

type CommentsListProps = {
    comments: Array<Comment>
}

const CommentsList = ({ comments }: CommentsListProps) => {
    return <>
        <div>
            {comments.map(comment =>
                <CommentCard comment={comment} />    
            )}
        </div>
    </>
}

export default CommentsList