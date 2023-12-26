import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import housesList from "../locale/data/housesList.json";
import categoriesList from "../locale/data/categoriesList.json";
/**
 *
 * @param {string} shiftUrl
 * @param {boolean} needSearch
 * @returns [data, loading]
 */

export const useData = (shiftUrl = "", needSearch = false) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const { search } = useLocation();

   const { REACT_APP_BASE_URL: url } = process.env;

   const searchStatus = needSearch ? search : "";

   const fullUrl = `${url}${shiftUrl}${searchStatus}`;

   const params = useParams();

   const localeDataListUrl = {
      "/houses/list": housesList.data,
      "/categories/list": categoriesList.data,
      [`/houses/id/${params.id}`]: housesList.data.find(
         (item) => item.id === +params.id
      ),
   }[shiftUrl];

   const request = async () => {
      try {
         const response = await fetch(fullUrl, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });

         let responseJson;

         if (!response.ok) {
            throw new Error(`Ошибка при запросе: ${response.statusText}`);
         }

         responseJson = await response.json();

         setData(responseJson.data || []);
      } catch (error) {
         setData(localeDataListUrl || []);
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
