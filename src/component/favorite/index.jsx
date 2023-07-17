import React, { useContext, useState } from "react";
import HouseCard from "../Generic/card/house";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/Properties";

const Favorite = () => {
   const [data, setData] = useState([])
   const [, despatch] = useContext(PropertiesContext);

   const { REACT_APP_BASE_URL: url } = process.env;

   const { refetch } = useQuery(
      [],
      async () => {
         const res = await fetch(`${url}/houses/getAll/favouriteList`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });
         return await res.json()
      },
      {
         onSuccess: (res) => {
            despatch({ type: "refetch", payload: refetch })
            setData(res?.data || [])
         },
      }
   );

   return (
      <Global.Container>
         <Wrapper>
            {data.length ? (
               data?.map((data) => {
                  return <HouseCard key={data?.id} data={data} />;
               })
            ) : (
               <Global.H3>Empty</Global.H3>
            )}
         </Wrapper>
      </Global.Container>
   );
};
export default Favorite;
