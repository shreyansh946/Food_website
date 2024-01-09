import React from "react";
import ReactDOM  from "react-dom/client";


const heading = React.createElement(
    "h1", {id:"heading"},
    "Shreyansh jain"
);

console.log(heading);

const jsxheading = <h1 id="heading">namaste react using jsx</h1>

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);