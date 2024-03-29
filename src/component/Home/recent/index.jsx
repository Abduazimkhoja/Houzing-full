import React from "react";
// import { useNavigate } from "react-router-dom";
import HouseCard from "../../Generic/card/house";
import { Global } from "../../../root/style";
import { Wrapper } from "./style";
import Slider from "../../Slider";

const Recent = ({ data }) => {
   // const navigate = useNavigate();

   return (
      <Wrapper>
         <Global.H3 margin="8">Recent Properties for Rent</Global.H3>
         <Global.H4 ta="center" margin="32px">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </Global.H4>
         <Slider dataLength={data.length} quantity={3}>
            {data.map((product, index) => (
               <li className="slide__item">
                  <HouseCard
                     key={product.id}
                     data={product}
                     // onClick={() => navigate(`/properties/?category_id=${value.id}`)}
                  />
               </li>
            ))}
         </Slider>
      </Wrapper>
   );
};

export default Recent;
