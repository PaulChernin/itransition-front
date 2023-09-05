import { Navigate, createBrowserRouter } from "react-router-dom"
import FeedPage from "../pages/Feed/FeedPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import AdminPanelPage from "../pages/AdminPanel/AdminPanel"
import ReviewPage from "../pages/Review/ReviewPage"
import ReviewCreatePage from "../pages/ReviewCreate/ReviewCreatePage"
import ReviewEditPage from "../pages/ReviewEdit/ReviewEditPage"
import VkAuthHandlePage from "../pages/HandleVkAuth/HandleVkAuthPage"
import FeedBestPage from "../pages/FeedBest/FeedBestPage"
import FeedLatestPage from "../pages/FeedLatest/FeedLatestPage"
import CommentsPage from "../pages/Comments/CommentsPage"
import Layout from "../layout/Layout"
import FeedTagsPage from "../pages/FeedTags/FeedTagsPage"
import NotFoundPage from "../pages/404/NotFoundPage"
import AdminRoutes from "./AdminRoutes"
import ProtectedRoutes from "./ProtectedRoutes"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/feed/best'/>
            },
            {
                path: '/feed',
                element: <FeedPage/>,
                children: [
                    {
                        path: '/feed/best',
                        element: <FeedBestPage/>
                    },
                    {
                        path: '/feed/latest',
                        element: <FeedLatestPage/>
                    },
                    {
                        path: '/feed/tags',
                        element: <FeedTagsPage/>
                    }
                ]
            },
            {
                path: '/review/:id',
                element: <ReviewPage/>
            },
            {
                path: '/comments/:reviewId',
                element: <CommentsPage/>
            },
            {
                path: '/',
                element: <ProtectedRoutes/>,
                children: [
                    {
                        path: '/user/:id',
                        element: <ProfilePage/>
                    },
                    {
                        path: '/review-create/:userId',
                        element: <ReviewCreatePage/>
                    },
                    {
                        path: '/review-edit/:id',
                        element: <ReviewEditPage/>
                    },
                ]
            },
            {
                path: '/',
                element: <AdminRoutes/>,
                children: [
                    {
                        path: '/admin',
                        element: <AdminPanelPage/>
                    }
                ]
            }
        ]
    },
    {
        path: '/vk-auth',
        element: <VkAuthHandlePage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

export default router