import React, { useEffect, useState } from "react";
import HouseCard from "../Generic/card/house";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { useLocation } from "react-router-dom";


const Properties = () => {
   const [data, setData] = useState([]);
   const {search} = useLocation()
   
   const { REACT_APP_BASE_URL: url } = process.env;
   useEffect(() => {
      fetch(`${url}/houses/list${search}`)
         .then((res) => res.json())
         .then((res) => {
            setData(res?.data || []);
         });
   }, [search]);

   return (
      <Global.Container>
         <Wrapper>
            {data?.map((data) => {
               return <HouseCard key={data?.id} data={data} />;
            })}
         </Wrapper>
      </Global.Container>
   );
};
export default Properties;
