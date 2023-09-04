import { Navigate, Outlet } from "react-router-dom"
import { useProfileStore } from "../hooks/profile/useProfileStore"


const AdminRoutes = () => {
    const { profile } = useProfileStore()
    
    if (profile?.isAdmin) {
        return <Outlet/>
    }

    return <Navigate to='/' replace />
}

export default AdminRoutes