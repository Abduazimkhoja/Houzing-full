import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import "./nullStyle.css";
import "./styleVar.css";
import Root from "./root";
import "./assets/icons/style.css";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <RootContext>
            <Root />
         </RootContext>
      </QueryClientProvider>
   </React.StrictMode>
);
