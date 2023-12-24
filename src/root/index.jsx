import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../component/Navbar";
import { Global } from "./style";
import { NotFound } from "../component/Generic/Not-found-404";

const Root = () => {
   return (
      <Global>
         <BrowserRouter>
            <Routes>
               <Route element={<Navbar />}>
                  {navbar.map(({ id, path, element }) => (
                     <Route key={id} path={path} element={element} />
                  ))}
               </Route>

               <Route path="/" element={<Navigate to="/home" />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </Global>
   );
};

export default Root;
