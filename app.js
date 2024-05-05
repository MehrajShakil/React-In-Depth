import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => <h1 id="heading">React In Depth using JSX </h1>;

// React functional Component - is just a normal js function.
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 id="heading"> React In Depth Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
