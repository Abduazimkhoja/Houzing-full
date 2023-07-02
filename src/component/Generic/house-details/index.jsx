import React from "react";
import { DetailsWrap } from "./style";
import { Global } from "../../../root/style";
import { detailsData } from "../../../utils/Details";

export const Details = ({
   houseDetails = {},
   color,
   width,
   margin,
   row = null,
   gap = null,
   year = null,
   fz,
}) => {
   const { beds, bath, garage, area, yearBuilt } = houseDetails;
   let details = [beds, bath, garage, area];
   let detailsDataUpdate = [...detailsData];

   if (year) {
      details = [...details, yearBuilt];
      detailsDataUpdate = [
         ...detailsData,
         { id: 5, title: " yearBuilt", icon: "icon-calendar" },
      ];
   }

   return (
      <DetailsWrap gap={gap} width={width} color={color} margin={margin}>
         {detailsDataUpdate.map(({ id, title, icon }, index) => {
            return (
               <DetailsWrap.Block row={row} key={id}>
                  <i className={icon}></i>
                  <Global.H5>
                     {details[index] > 1 && index !== 3
                        ? details[index] + title + "s"
                        : (details[index] || 0) + title}
                  </Global.H5>
               </DetailsWrap.Block>
            );
         })}
      </DetailsWrap>
   );
};

export default Details;
