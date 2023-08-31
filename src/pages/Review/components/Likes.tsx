import { Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { addLike, getLikes } from "./api.ts/api"

type LikesProps = {
    reviewId: number,
    userId: number
}

const Likes = ({ reviewId, userId }: LikesProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        getLikes(reviewId, userId)
            .then(response => {
                setIsLiked(response.userLike)
                setCount(response.count)
            })
    }, [reviewId, userId])

    const handleAddLike = async () => {
        const response = await addLike(reviewId, userId)
        setCount(response.count)
    }

    return <>
        <Checkbox
            checked={isLiked}
            onChange={handleAddLike}
        />
        <div>{count}</div>
    </>
}

export default Likes