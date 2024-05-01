
/*
Creating nested element.

<div id="parent">
    <div id="child1">
        <h1> I'm h1 </h1>
        <h2> I'm h2 </h2>
    </div>
    <div id="child2">
        <h1> I'm h1 </h1>
        <h2> I'm h2 </h2>
    </div>
</div>

ReactElement(object) => (when render), HTML(Browser understands)  

This is just a massy solution to creating just this nested html elements.

To sovle this, 
React come with "JSX" 
Don't know what it "JSX", let's move into next.
*/

import { React } from "react";
import { ReactDOM } from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 heading"),
    React.createElement("h2", {}, "I'm h2 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 heading"),
    React.createElement("h2", {}, "I'm h2 heading"),
  ]),
]);



console.log(parent) // heading is a js object.

const root = ReactDOM.createRoot(document.getElementById("root"));
// react dom, replace every thing inside the root element.
root.render(parent);
