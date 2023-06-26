import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../component/Navbar";
import { Search } from "../component/Search";
import { Global } from "./style";

const Root = () => {
   return (
      <Global>
         <BrowserRouter>
            <Routes>
               <Route element={<><Navbar /><Search/></>}>
                  {navbar.map(({ id, path, element }) => (
                     <Route key={id} path={path} element={element} />
                  ))}
               </Route>

               <Route path="/" element={<Navigate to="/home" />} />
               <Route path="*" element={<h1>404 Not Fond</h1>} />
            </Routes>
         </BrowserRouter>
      </Global>
   );
};

export default Root;
