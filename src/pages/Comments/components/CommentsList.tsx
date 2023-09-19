import { Text, VStack } from "@chakra-ui/react"
import CommentCard from "./CommentCard"
import { Comment } from "./types/Comment"
import { useTranslation } from "react-i18next"

type CommentsListProps = {
    comments: Array<Comment>
}

const CommentsList = ({ comments }: CommentsListProps) => {
    const { t } = useTranslation()

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
            <Text>{t('comments.no-comments-yet')}</Text>
        }
    </>
}

export default CommentsList