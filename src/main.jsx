import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MenuProvider } from "./context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuProvider>
    <App />
  </MenuProvider>
);
