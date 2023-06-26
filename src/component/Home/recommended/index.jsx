import React from "react";
import { useData } from "../../../hooks/useData";
// import { useNavigate } from "react-router-dom";
import { GenericSlider } from "../../Generic";
import HouseCard from "../../Generic/card/house";
import { Global } from "../../../root/style";
import { Wrapper } from "./style";

const Recommended = () => {
   const [data] = useData("/houses/list");
   // const navigate = useNavigate();

   return (
      <Wrapper>
         <Global.H3 margin = "8">Recommended</Global.H3>
         <Global.H4 ta = "center" margin = "32px">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </Global.H4>
         <GenericSlider count={3}>
            {data.map((object) => (
               <HouseCard
                  key={object.id}
                  data={object}
                  // onClick={() => navigate(`/properties/?category_id=${value.id}`)}
               />
            ))}
         </GenericSlider>
      </Wrapper>
   );
};

export default Recommended;
