import { useParams } from "react-router-dom"
import Reviews from "./components.tsx/Reviews"

const ProfilePage = () => {
    const { id } = useParams()

    return <>
        {id &&
            <Reviews userId={parseInt(id)} />
        }
    </>
}

export default ProfilePage