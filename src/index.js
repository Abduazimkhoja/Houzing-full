import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import "./nullStyle.css";
import "./styleVar.css";
import Root from "./root";
import "./assets/icons/style.css"
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RootContext>
         <Root />
      </RootContext>
   </React.StrictMode>
);
