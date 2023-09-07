import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { addLike, getLike, getLikeCount } from "./api.ts/api"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useProfileStore } from "../../../hooks/profile/useProfileStore"
import { Review } from "./types/Review"

type LikesProps = {
    review: Review
}

const Likes = ({ review }: LikesProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(0)
    const { profile } = useProfileStore()

    const load = () => {
        getLikeCount(review.id)
            .then((count: number) => {
                setCount(count)
            })
        if (profile) {
            getLike(review.id, profile.userId)
                .then(response => {
                    setIsLiked(response.userLike)
                })
        }
    }

    useEffect(() => {
        load()
    })

    const handleAddLike = async () => {
        if (profile) {
            await addLike(review.id, profile.userId)
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

export default Likes