import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM client: render React components
import "./index.css";
import Home from "./pages/Home"; //不用特別加index.js 會自動偵測

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
