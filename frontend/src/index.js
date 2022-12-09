import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./index.css";
import AlertNofication from '../src/shared/component/AlertNotification'
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertNofication />
      <App />

    </Provider>
  </React.StrictMode>
);

