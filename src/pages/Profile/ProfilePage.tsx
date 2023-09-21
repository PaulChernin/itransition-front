import { useParams } from "react-router-dom"
import ReviewsManager from "../../components/ReviewsManager/ReviewsManager"

const ProfilePage = () => {
    const { id } = useParams()

    return <>
        {id &&
            <ReviewsManager userId={parseInt(id)} />
        }
    </>
}

export default ProfilePage