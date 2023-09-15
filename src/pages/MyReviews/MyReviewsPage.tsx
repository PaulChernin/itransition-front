import { Heading } from "@chakra-ui/react"
import ReviewsManager from "../../components/ReviewsManager/ReviewsManager"
import { useProfileStore } from "../../hooks/profile/useProfileStore"

const MyReviewsPage = () => {
    const profile = useProfileStore().profile!

    return <>
        <Heading as='h1' size='lg' marginBottom={4}>
            My reviews:
        </Heading>
        <ReviewsManager userId={profile.id} />
    </>
}

export default MyReviewsPage