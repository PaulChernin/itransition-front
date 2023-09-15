import { Text, VStack } from "@chakra-ui/react"
import CommentCard from "./CommentCard"
import { Comment } from "./types/Comment"

type CommentsListProps = {
    comments: Array<Comment>
}

const CommentsList = ({ comments }: CommentsListProps) => {
    return <>
        {comments.length
            ?
            <VStack spacing={3} align='left'>
                {comments.map(comment =>
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                    />
                )}
            </VStack>
            :
            <Text>No comments yet</Text>
        }
    </>
}

export default CommentsList