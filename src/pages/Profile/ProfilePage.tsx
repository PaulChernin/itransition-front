import { useParams } from "react-router-dom"
import ReviewsManager from "../../components/ReviewsManager/ReviewsManager"

const ProfilePage = () => {
    const { id } = useParams() // TODO:

    return <>
        {id &&
            <ReviewsManager userId={parseInt(id)} />
        }
    </>
}

export default ProfilePage