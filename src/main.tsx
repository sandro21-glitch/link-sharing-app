import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AccountContext from "./context/accountContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AccountContext>
      <App />
    </AccountContext>
  </React.StrictMode>
);
