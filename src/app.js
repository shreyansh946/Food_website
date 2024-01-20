import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

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

root.render(<AppLayout />);