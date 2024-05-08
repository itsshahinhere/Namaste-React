const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child11" }, "Hello"),
    React.createElement("h2", { id: "child12" }, "World"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
