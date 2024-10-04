import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transipied before it reacher the JS) - PARCEL -Babel
// JSX => Babel transpile it to React.createElement => ReactElement-JS Object =>HTMLElement(render)

const jsxHeading = (
<h1 className="head" tabIndex="5">
    Namaste React using JSX</h1>
    );
    console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading) 
