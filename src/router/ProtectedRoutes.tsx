import { Navigate, Outlet } from "react-router-dom"
import { useProfileStore } from "../hooks/profile/useProfileStore"


const ProtectedRoutes = () => {
    const { profile } = useProfileStore()
    
    if (profile) {
        return <Outlet/>
    }

    return <Navigate to='/' replace />
}

export default ProtectedRoutes