import { Box } from "@chakra-ui/react"
import { Comment } from "./types/Comment"

type CommentCardProps = {
    comment: Comment
}

const CommentCard = ({ comment }: CommentCardProps) => {
    return <>
        <Box>
            <Box
                fontSize='1.1em'
                fontWeight='bold'
            >
                {comment.user.nick}
            </Box>
            <Box>{comment.text}</Box>
        </Box>
    </>
}

export default CommentCard