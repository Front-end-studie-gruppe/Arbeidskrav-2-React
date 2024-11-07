import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.module.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
