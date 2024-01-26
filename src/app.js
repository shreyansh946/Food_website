import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./Components/about";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
//import Error from "./Components/error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
   <div className="app">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,

    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />, 
      },
      {
        path:"/contact",
        element:<Contact />, 
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);