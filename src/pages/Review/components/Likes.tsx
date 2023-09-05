import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { addLike, getLike } from "./api.ts/api"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useProfileStore } from "../../../hooks/profile/useProfileStore"
import { Review } from "./types/Review"

type LikesProps = {
    review: Review
}

const Likes = ({ review }: LikesProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const { profile } = useProfileStore()

    useEffect(() => {
        if (profile) {
            getLike(review.id, profile.userId)
                .then(response => {
                    setIsLiked(response.userLike)
                })
        }
    }, [review, profile])

    const handleAddLike = async () => {
        if (profile) {
            await addLike(review.id, profile.userId)
        }
    }

    return <>
        <Button
            onClick={handleAddLike}
            leftIcon={isLiked ? <AiFillHeart/> : <AiOutlineHeart/> }
        >
            {isLiked ? review.likesCount + 1 : review.likesCount}
        </Button>
    </>
}

export default Likes