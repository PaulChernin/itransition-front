import { useEffect, useState } from "react"
import CommentsList from "./components/CommentsList"
import { Comment } from "./components/types/Comment"
import { createComment, getComments } from "./api/api"
import CommentSender from "./components/CommentSender"
import { useProfileStore } from "../../hooks/profile/useProfileStore"
import { Text } from "@chakra-ui/react"
import { useNumberParam } from "@/hooks/useNumberParam"
import { useTranslation } from "react-i18next"

const CommentsPage = () => {
    const { t } = useTranslation()
    const reviewId = useNumberParam('reviewId')!
    const [comments, setComments] = useState<Array<Comment>>([])
    const { profile } = useProfileStore()

    const loadComments = async (reviewId: number) => {
        setComments(await getComments(reviewId))
    }

    useEffect(() => {
        loadComments(reviewId)
        const interval = setInterval(() => {loadComments(reviewId)}, 5000)
        return () => {clearInterval(interval)}
    }, [reviewId])

    const send = async (text: string) => {
        await createComment(reviewId, text, profile!.id)
        loadComments(reviewId)
    }

    return <>
        <CommentsList comments={comments} />
        {profile
            ?
            <CommentSender send={send} />
            :
            <Text marginTop={6}>
                {t('comments.login-to-comment')}
            </Text>
        }
    </>
}

export default CommentsPage