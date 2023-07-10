import React from "react";
import HouseCard from "../Generic/card/house";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { useData } from "../../hooks/useData";

const Favorite = () => {
   const [data] = useData("/houses/list", true);

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
export default Favorite;
