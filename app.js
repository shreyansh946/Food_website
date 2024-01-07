import React from "react";
import ReactDOM  from "react-dom/client";

const heading2 =  React.createElement(
    "div",
    { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag")
    ]);

    const heading1 = React.createElement(
        "div",
        { id: "child" }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
        ]);

const parent = React.createElement("div",
    { id: "parent" },
    [
            heading1,
                heading2
    ]
);


const heading = React.createElement("h1", { id: "heading" }, "hello world from react");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
