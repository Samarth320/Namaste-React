import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";

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
                    element:<About />
                },
                {
                    path:"/contactus",
                    element:<ContactUs />
                },
                {
                    // :id is dynamic part in this path
                    path:"/restaurants/:resId",
                    element: <RestaurantMenu />
                }
        ]
    },
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)