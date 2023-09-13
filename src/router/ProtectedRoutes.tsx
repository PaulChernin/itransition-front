import { Navigate, Outlet } from "react-router-dom"
import { useProfileStore } from "../hooks/profile/useProfileStore"

type ProtectedRoutesProps = {
    requireAdmin?: boolean
}

const ProtectedRoutes = ({ requireAdmin }: ProtectedRoutesProps) => {
    const { profile } = useProfileStore()
    
    if (profile && (!requireAdmin || profile.isAdmin)) {
        return <Outlet/>
    }

    return <Navigate to='/' replace />
}

export default ProtectedRoutes