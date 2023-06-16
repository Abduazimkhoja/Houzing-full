import React from "react";
import { DetailsWrap } from "./style";
import { Global } from "../../../root/style";
import { detailsData } from "../../../utils/Details";

export const Details = ({ beds, baths, garage, sqFt, color, width }) => {
   const details = [beds, baths, garage, sqFt];

   return (
      <DetailsWrap width={width} color={color}>
         {detailsData.map(({ id, title, icon }, index) => {
            return (
               <DetailsWrap.Block key={id}>
                  <i className={icon}></i>
                  <Global.H4>
                     {details[index] > 1 && index !== 3
                        ? details[index] + title + "s"
                        : (details[index] || 0) + title}
                  </Global.H4>
               </DetailsWrap.Block>
            );
         })}
      </DetailsWrap>
   );
};

export default Details;
