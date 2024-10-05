import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, "Child 1"),
  React.createElement("div", { id: "child2" }, "Child 2"),
  React.createElement("div", { id: "child3" }, [
    React.createElement("div", { id: "grandchild1" }, "Grandchild 1"),
    React.createElement("div", { id: "grandchild2" }, "Grandchild 2"),
  ]),
]);

console.log("parent", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
