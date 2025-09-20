import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Code Splitting
// Dynamic Bundling
// On-Demand Bundling
// Chunking
// Lazy Loading

const Grocery = lazy( ()=> import("./components/Grocery") )
const About = lazy( ()=> import("./components/About") )


const AppLayout = () => {

    return(
        <div>

            <Header />

            <Outlet />

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error/>,

        children:[
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path:"/about",
                    element: <Suspense fallback={<h1>Loading...</h1>}> <About /> </Suspense>
                },
                {
                    path:"/contactus",
                    element:<ContactUs />
                },
                {
                    // :id is dynamic part in this path
                    path:"/restaurants/:resId",
                    element: <RestaurantMenu />
                },
                {
                    path:"/grocery",
                    element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery />  </Suspense>
                }
        ]
    },
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)