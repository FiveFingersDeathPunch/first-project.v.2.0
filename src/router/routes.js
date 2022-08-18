import About from "../pages/About"
import Login from "../pages/Login"
import PostIdPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"


export const privateRoutes = [
    { path: "/About/", element: About },
    { path: "/Posts/", element: Posts },
    { path: "/Posts/:id", element: PostIdPage }
]

export const publicRoutes = [
    { path: "/Login/", element: Login }
]