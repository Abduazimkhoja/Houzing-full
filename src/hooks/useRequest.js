import { useState } from "react";

const useRequest = () => {
   const [data, setData] = useState([]),
      [loading, setLoading] = useState(true),
      [error, setError] = useState(null);

   const token = `Bearer ${localStorage.getItem("token")}`;

   const fetchData = async ({
      url,
      method = "GET",
      body = null,
      authorize = false,
      urlType = "base",
   }) => {
      const keepLink = `${
         {
            base: process.env.REACT_APP_BASE_URL,
            public: process.env.REACT_APP_PUBLIC_URL,
         }[urlType]
      }${url}`;

      try {
         const response = await fetch(keepLink, {
            method,
            headers: {
               "Content-Type": "application/json",
               Authorization: authorize && token,
            },
            body: body && JSON.stringify(body),
         });

         const responseJson = await response.json();

         setData(responseJson);
         setLoading(false);
         return responseJson;
      } catch (error) {
         setError(error);
      }
   };

   return { data, loading, error, fetchData };
};

export default useRequest;
