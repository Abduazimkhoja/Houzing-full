import React, { useContext, useState } from "react";
import HouseCard from "../Generic/card/house";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/Properties";

const Favorite = () => {
   const [data, setData] = useState([]);
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
         return await res.json();
      },
      {
         onSuccess: (res) => {
            despatch({ type: "refetch", payload: refetch });
            setData(res?.data || []);
         },
      }
   );

   return (
      <Global.Container>
         <Global.H3 mt = "30px" margin="20px">Favorite</Global.H3>
         <Global.H4 margin="60px" ta="center">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </Global.H4>
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
