import React from "react";
import ReactDOM  from "react-dom/client";

//React Element
const heading = React.createElement(
    "h1", {id:"heading"},
    "Shreyansh jain"
);

console.log(heading);



const  HeadingComponent = () =>{
            <div id="container">
                    <h1 className="heading"> Namaste react functional Components</h1>
            </div>
};

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);