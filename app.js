import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child11" }, "Lecture"),
    React.createElement("h2", { id: "child12" }, "2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
