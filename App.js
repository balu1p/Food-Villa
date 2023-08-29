import React from "react";
import ReactDOM, {createRoot}from 'react-dom/client';
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./src/components/Details";
const AppLayout = () =>{
   return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
   )
}
const appRouter = createBrowserRouter([
   {
      path:"/",
      element: <AppLayout/>,
      children: [
         {
            path:"/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path: "/details/:id",
            element: <Details />
          },
      ]
   }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);