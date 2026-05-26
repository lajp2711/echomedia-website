import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LanternCrisisTrigger from "./components/easter-eggs/LanternCrisisTrigger.jsx";
import "./styles.css";

const container = document.getElementById("root");

createRoot(container).render(
  <React.StrictMode>
    <App />
    <LanternCrisisTrigger />
  </React.StrictMode>
);
