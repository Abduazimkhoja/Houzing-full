import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/navbar";

export default function Root() {
   return (
      <BrowserRouter>
         <Routes>
            {navbar.map(({ id, path, element }) => (
               <Route key={id} path={path} element={element} />
            ))}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<h1>404 Not Fond</h1>} />
         </Routes>
      </BrowserRouter>
   );
}
