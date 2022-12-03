import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home";
import Login from "../Pages/LogIn/Login";
import Main from "../Pages/Main";
import MyReview from "../Pages/MyReview/MyReview";
import UpdateReview from "../Pages/MyReview/UpdateReview";
import Reg from "../Pages/Reg/Reg";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/addservice',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://wedding-server-chi.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            },
            {
                path: '/myreview',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>,

            },
            {
                path: '/myreview/:id',
                element: <PrivateRouter><UpdateReview></UpdateReview></PrivateRouter>,
                loader: ({ params }) => fetch(`https://wedding-server-chi.vercel.app/reviews/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;