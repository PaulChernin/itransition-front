import { VStack } from "@chakra-ui/react"
import CommentCard from "./CommentCard"
import { Comment } from "./types/Comment"

type CommentsListProps = {
    comments: Array<Comment>
}

const CommentsList = ({ comments }: CommentsListProps) => {
    return <>
        <VStack spacing={3} align='left'>
            {comments.map(comment =>
                <CommentCard
                    key={comment.id}
                    comment={comment}
                />    
            )}
        </VStack>
    </>
}

export default CommentsList