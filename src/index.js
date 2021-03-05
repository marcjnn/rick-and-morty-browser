import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./style/index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
