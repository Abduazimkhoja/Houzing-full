import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const HouseItem = () => {
   const { data, fetchData } = useRequest();
   const params = useParams();

   useEffect(() => {
      fetchData({
         url: `/houses/id/${params.id}`,
      });
   }, []);

   return <div></div>;
};

export default HouseItem;
