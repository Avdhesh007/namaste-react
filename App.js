import React from "react";
import ReactDOM from "react-dom/client";

// jsx or relact element
const elem = <span>React Element ,</span>

// using react element in react element
const Title =  (
<h1 className="head" tabIndex="5">
    {elem}
   I am component in component</h1>
    );


// React Functional Component
// using react element in component
const HeadingComponent = () => (
    <div>
        {Title}
        <h1 className="heading"> Namaste React Functional Component1</h1>
        <h1 className="heading2"> Namaste React Functional Component2</h1>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>) 
