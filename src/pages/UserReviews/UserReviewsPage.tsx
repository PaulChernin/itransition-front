import { Heading } from "@chakra-ui/react"
import ReviewsManager from "../../components/ReviewsManager/ReviewsManager"
import { useParams } from "react-router-dom"

const UserReviewsPage = () => {
    const { userId } = useParams()
    
    return <>
        <Heading as='h1' size='lg'>
            User reviews:
        </Heading>
        <ReviewsManager userId={userId ? parseInt(userId) : 0} />
    </>
}

export default UserReviewsPage