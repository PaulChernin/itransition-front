import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { addLike, getLike, getLikeCount } from "./api/api"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useProfileStore } from "../../../hooks/profile/useProfileStore"
import { Review } from "@/types/Review"

type LikesButtonProps = {
    review: Review
}

const LikesButton = ({ review }: LikesButtonProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(0)
    const { profile } = useProfileStore()

    const loadLikeCount = async (reviewId: number) => {
        setCount(await getLikeCount(reviewId))
    }

    const loadLike = async (reviewId: number, profileId: number) => {
        setIsLiked(await getLike(reviewId, profileId))
    }

    const load = () => {
        loadLikeCount(review.id)
        if (profile) {
            loadLike(review.id, profile.id)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const handleAddLike = async () => {
        if (profile) {
            await addLike(review.id, profile.id)
            load()
        }
    }

    return <>
        <Button
            onClick={handleAddLike}
            leftIcon={isLiked ? <AiFillHeart/> : <AiOutlineHeart/> }
        >
            {count}
        </Button>
    </>
}

export default LikesButton