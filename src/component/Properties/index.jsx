import React from "react";
import HouseCard from "../Generic/card/house";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { useData } from "../../hooks/useData";

const Properties = () => {
   const [data] = useData("/houses/list", true);
   const favoriteList = useData(`/houses/getAll/favouriteList`)[0];

   return (
      <Global.Container>
         <Global.H3 mt="30px" margin="20px">
            Properties
         </Global.H3>
         <Global.H4 margin="60px" ta="center">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </Global.H4>
         <Wrapper>
            {data?.map((data) => {
               return <HouseCard key={data?.id} data={data} favoriteList={favoriteList}/>;
            })}
         </Wrapper>
      </Global.Container>
   );
};
export default Properties;
