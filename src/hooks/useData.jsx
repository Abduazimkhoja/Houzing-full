import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useData = (shiftUrl = "", needSearch = false) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const { search } = useLocation();

   const { REACT_APP_BASE_URL: url } = process.env;

   const searchStatus = needSearch ? search : "";
   const fullUrl = `${url}${shiftUrl}${searchStatus}`;

   const request = async () => {
      try {
         const response = await fetch(fullUrl, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });

         if (!response.ok) {
            throw new Error(`Ошибка при запросе: ${response.statusText}`);
         }

         const responseJson = await response.json();

         setData(responseJson?.data || []);
      } catch (error) {
         console.error("Произошла ошибка при запросе:", error.message); // добавлен отладочный вывод
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      request();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchStatus]);

   return [data, loading];
};
