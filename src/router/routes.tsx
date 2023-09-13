import { Navigate } from "react-router-dom"
import FeedPage from "../pages/Feed/FeedPage"
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
import ProtectedRoutes from "./ProtectedRoutes"
import MyReviewsPage from "../pages/MyReviews/MyReviewsPage"
import UserReviewsPage from "../pages/UserReviews/UserReviewsPage"
import ValidateParams from "./ValidateParams"

export default [
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
                element: (
                    <ValidateParams paramName="id">
                        <ReviewPage/>
                    </ValidateParams>
                )
            },
            {
                path: '/comments/:reviewId',
                element: (
                    <ValidateParams paramName="reviewId">
                        <CommentsPage/>
                    </ValidateParams>
                )
            },
            {
                path: '/',
                element: <ProtectedRoutes/>,
                children: [
                    {
                        path: '/my-reviews',
                        element: <MyReviewsPage/>
                    },
                    {
                        path: '/review-create/:userId',
                        element: (
                            <ValidateParams paramName="userId">
                                <ReviewCreatePage/>
                            </ValidateParams>
                        )
                    },
                    {
                        path: '/review-edit/:id',
                        element: (
                            <ValidateParams paramName="id">
                                <ReviewEditPage/>
                            </ValidateParams>
                        )
                    },
                ]
            },
            {
                path: '/',
                element: <ProtectedRoutes requireAdmin />,
                children: [
                    {
                        path: '/admin',
                        element: <AdminPanelPage/>
                    },
                    {
                        path: '/user-reviews/:userId',
                        element: (
                            <ValidateParams paramName="userId">
                                <UserReviewsPage/>
                            </ValidateParams>
                        )
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
        path: '/404',
        element: <NotFoundPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]