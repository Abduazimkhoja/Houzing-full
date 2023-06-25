import React, { useEffect, useState } from "react";
import HouseCard from "../Generic/card/house";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { useLocation } from "react-router-dom";
import Slider from "../Slider";
import { useData } from "../../hooks/useData";

const Properties = () => {
   const [data] = useData("/houses/list", true);

   return (
      <Global.Container>
         <Wrapper>
            {data?.map((data) => {
               return <HouseCard key={data?.id} data={data} />;
            })}
         </Wrapper>
      </Global.Container>
         // <Slider />
   );
};
export default Properties;
