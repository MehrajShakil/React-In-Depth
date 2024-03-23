const heading = React.createElement(
  "h1",
  { id: "header" },
  "Hello World from React!"
);

console.log(heading) // heading is a js object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
