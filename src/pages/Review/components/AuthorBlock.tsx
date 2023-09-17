import { User } from "@/types/User"
import { HStack, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getLikeCountByUser } from "./api/api"
import { AiFillHeart } from "react-icons/ai"

type AuthorBlockProps = {
    user: User
}

const AuthorBlock = ({ user }: AuthorBlockProps) => {
    const [likesCount, setLikesCount] = useState(0)

    const loadLikesCount = async (user: User) => {
        setLikesCount(await getLikeCountByUser(user.id))
    }

    useEffect(() => {
        loadLikesCount(user)
    }, [user])
    
    return <>
        <HStack alignItems='center' gap={2}>
            <div>Author:</div>
            <div>{user.nick}</div>
            {likesCount &&
                <HStack alignItems='center' gap={0}>
                    <div>{likesCount}</div>
                    <Icon as={AiFillHeart}/>
                </HStack>
            }
        </HStack>
    </>
}

export default AuthorBlock