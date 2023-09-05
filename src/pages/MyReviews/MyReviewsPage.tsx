import { Heading } from "@chakra-ui/react"
import ReviewsManager from "../../components/ReviewsManager/ReviewsManager"
import { useProfileStore } from "../../hooks/profile/useProfileStore"

const MyReviewsPage = () => {
    const profile = useProfileStore().profile!

    return <>
        <Heading as='h1' size='lg'>
            My reviews:
        </Heading>
        <ReviewsManager userId={profile.userId} />
    </>
}

export default MyReviewsPage