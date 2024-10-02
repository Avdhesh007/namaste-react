import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"grandparent", xyz:"abc"}, 
    [
        React.createElement(
            "div", 
            {id:"parent1"},
            [
                React.createElement("h1",{id:"child"},"I am child1 of parent1"),
                React.createElement("h1",{id:"child"},"I am child2 of parent1")
            ]
         ),
         React.createElement(
            "div", 
            {id:"parent2"},
            [
                React.createElement("h1",{id:"child"},"I am child1 of parent2"),
                React.createElement("h1",{id:"child"},"I am child2 of parent2")
            ]
         )
        ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)