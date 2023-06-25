import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useData = (shiftUrl, needSearch = false) => {
   const [data, setData] = useState([]);
   const { search } = useLocation();
   const { REACT_APP_BASE_URL: url } = process.env;

   useEffect(() => {
      fetch(`${url}${shiftUrl}${needSearch ? search : ""}`, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
      })
         .then((res) => res.json())
         .then((res) => {
            setData(res?.data || []);
         });
   }, [needSearch && search]);
   
   return [data, setData];
};
