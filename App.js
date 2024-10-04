import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
<h1 className="head" tabIndex="5">
    Namaste React using JSX</h1>
    );
    console.log(jsxHeading);


// React Functional Component
const HeadingComponent = () => (
    <div>
        <h1 className="heading"> Namaste React Functional Component</h1>
        <h1 className="heading2"> Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading) 
