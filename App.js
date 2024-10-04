import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const Title = () => (
<h1 className="head" tabIndex="5">
   I am component in component</h1>
    );


// React Functional Component
// Component Composition
const HeadingComponent = () => (
    <div>
        <Title/>
        <h1 className="heading"> Namaste React Functional Component1</h1>
        <h1 className="heading2"> Namaste React Functional Component2</h1>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>) 
