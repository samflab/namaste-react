import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Body from "./src/Body/Body";

const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
