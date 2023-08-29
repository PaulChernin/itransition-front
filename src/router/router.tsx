import { createBrowserRouter } from "react-router-dom"
import FeedPage from "../pages/Feed/FeedPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import AdminPanelPage from "../pages/AdminPanel/AdminPanel"
import ReviewPage from "../pages/Review/ReviewPage"
import ReviewCreatePage from "../pages/ReviewCreate/ReviewCreatePage"
import ReviewEditPage from "../pages/ReviewEdit/ReviewEditPage"
import VkAuthHandlePage from "../auth/HandleVkAuthPage"
import FeedBestPage from "../pages/FeedBest/FeedBestPage"
import FeedLatestPage from "../pages/FeedLatest/FeedLatestPage"
import CommentsPage from "../pages/Comments/CommentsPage"

const router = createBrowserRouter([
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
            }
        ]
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
        path: '/comments/:reviewId',
        element: <CommentsPage/>
    },
    {
        path: '/review-create/:userId',
        element: <ReviewCreatePage/>
    },
    {
        path: '/review-edit/:id',
        element: <ReviewEditPage/>
    },
    {
        path: '/vk-auth',
        element: <VkAuthHandlePage/>
    }
])

export default router