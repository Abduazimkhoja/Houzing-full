import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useData = (shiftUrl = "", needSearch = false) => {
   const [data, setData] = useState([]);
   const { search } = useLocation();

   const { REACT_APP_BASE_URL: url } = process.env;

   const searchStatus = needSearch ? search : "";
   const fullUrl = `${url}${shiftUrl}${searchStatus}`;

   useEffect(() => {
      (async () => {
         const response = await fetch(fullUrl, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });
         const responseJson = await response.json();
         setData(responseJson?.data || []);
      })();
      // useEffect(() => {
      //    fetch(fullUrl, {
      //       headers: {
      //          Authorization: `Bearer ${localStorage.getItem("token")}`,
      //       },
      //    })
      //       .then((res) => res.json())
      //       .then((res) => {
      //          setData(res?.data || []);
      //       });

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchStatus]);

   return [data];
};
