import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/vendors/animate.css";
import "./assets/vendors/custom-animate.css";
import "./assets/vendors/flaticon.css";
import "./assets/vendors/fontawesome-all.css";
import "./assets/vendors/linoor-icons.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/hover.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
