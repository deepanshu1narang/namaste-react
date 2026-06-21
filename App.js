// const heading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hello world from React basics");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React.createElement(tag, attributesObject, children); single child --> directly insert the child, multiple children (ie siblings of each other --> array of children)

{
  /* <div id="parent">
  <div id="child">
  <h1>I am an h1 tag</h1>
  <h2>Ore wa h2 tag da!!!</h2>
  </div>
  <div id="child2">
  <h1>I am an h1 tag --2 </h1>
  <h2>Ore wa h2 tag da --2!!!</h2>
  </div>
  </div>; */
}

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "d1" }, [
    React.createElement("h1", { key: "k1" }, "I am an h1 tag yo!!!"),
    React.createElement("h2", { key: "k2" }, "Ore wa h2 tag da!!!"),
    React.createElement("h1", { key: "k3" }, "Namaste React 🚀"),
  ]),
  React.createElement("div", { id: "child2", key: "d2" }, [
    React.createElement("h1", { key: "k3" }, "I am an h1 tag --2 "),
    React.createElement("h2", { key: "k4" }, "Ore wa h2 tag da --2!!!"),
  ]),
]);

const parentWithSingleChild = React.createElement(
  "div",
  { id: "parent-with-single-child" },
  React.createElement("h1", {}, "I am a single child"),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(parentWithSingleChild);
