import { Heading } from "@chakra-ui/react"
import ReviewsManager from "../../components/ReviewsManager/ReviewsManager"
import { useNumberParam } from "../../hooks/useNumberParam"

const UserReviewsPage = () => {
    const userId = useNumberParam('userId')!
    
    return <>
        <Heading as='h1' size='lg' marginBottom={4}>
            User reviews:
        </Heading>
        <ReviewsManager userId={userId} />
    </>
}

export default UserReviewsPage