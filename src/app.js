import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./Components/about";
import Contact from "./Components/Contact";
import Error from "./Components/error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
   <div className="app">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error />
  },
  {
    path:'/about',
    element:<About />, 
  },
  {
    path:'/contact',
    element:<Contact />, 
  }
])

root.render(<RouterProvider router={appRouter} />);