import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/Main/MainPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import AdminPanelPage from "../pages/AdminPanel/AdminPanel"
import ReviewPage from "../pages/Review/ReviewPage"
import ReviewCreatePage from "../pages/ReviewCreate/ReviewCreatePage"
import ReviewEditPage from "../pages/ReviewEdit/ReviewEditPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/user/:id',
        element: <ProfilePage/>
    },
    {
        path: '/admin',
        element: <AdminPanelPage/>,
    },
    {
        path: '/review/:id',
        element: <ReviewPage/>
    },
    {
        path: '/review-create/:userId',
        element: <ReviewCreatePage/>
    },
    {
        path: '/review-edit/:id',
        element: <ReviewEditPage/>
    }
])

export default router