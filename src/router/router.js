import {createBrowserRouter,} from "react-router-dom";
import {lazy, Suspense} from "react";
import {ErrorPage} from "../pages/utilPages/ErrorPage";
import {LoadingPage} from "../pages/utilPages/LoadingPage";

const Layout = lazy(() => import("../layout/Layout"));
const Login = lazy(() => import("../pages/login/Login"));
const KakaoLoading = lazy(() => import("../pages/login/components/KakaoLoading"));
const UniversityEdit = lazy(() => import("../pages/university/UniversityEdit"));
const KeyWordEdit = lazy(() => import("../pages/keyword/KeyWordEdit"));
const CompletePage = lazy(() => import("../pages/utilPages/CompletePage"));
const Main = lazy(() => import("../pages/main/Main"));
const Notification = lazy(() => import("../pages/notification/Notification"));
const Faq = lazy(() => import("../pages/faq/Faq"));
const Search = lazy(() => import("../pages/search/Search"));

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={<LoadingPage/>}><Layout/></Suspense>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    errorElement: <ErrorPage/>,
                    children: [
                        {index: true, element: <Login/>},
                        {
                            path: "main",
                            element: <Main/>,
                        },
                        {
                            path: "kakao/callback",
                            element: <KakaoLoading/>,
                        },
                        {
                            path: "register/university",
                            element: <UniversityEdit/>,
                        },
                        {
                            path: "register/keyword",
                            element: <KeyWordEdit/>,
                        },
                        {
                            path: "register/complete",
                            element: <CompletePage/>,
                        },
                        {
                            path: "notification",
                            element: <Notification/>,
                        },
                        {
                            path: "search",
                            element: <Search/>,
                        },
                        {
                            path: "faq",
                            element: <Faq/>,
                        },
                        {
                            path: "setting/university",
                            element: <UniversityEdit/>,
                        },
                        {
                            path: "setting/keyword",
                            element: <KeyWordEdit/>,
                        },
                    ],
                }
            ],
        },
    ])
;