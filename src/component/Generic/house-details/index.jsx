import React from "react";
import { DetailsWrap } from "./style";
import { Global } from "../../../root/style";

export const Details = ({ beds, baths, garage, sqFt, color, width }) => {
   return (
      <DetailsWrap width = {width}>
         <DetailsWrap.Block>
            <i
               style={{ color: { color } }}
               className="details__icon icon-bed"
            ></i>
            <Global.H4 color={color || "white"}>{beds || 0} Beds</Global.H4>
         </DetailsWrap.Block>
         <DetailsWrap.Block>
            <i
               style={{ color: { color } }}
               className="details__icon icon-bath"
            ></i>
            <Global.H4 color={color || "white"}>{baths || 0} Baths</Global.H4>
         </DetailsWrap.Block>
         <DetailsWrap.Block>
            <i
               style={{ color: { color } }}
               className="details__icon icon-car"
            ></i>
            <Global.H4 color={color || "white"}>{garage || 0} Garage</Global.H4>
         </DetailsWrap.Block>
         <DetailsWrap.Block>
            <i
               style={{ color: { color } }}
               className="details__icon icon-ruler"
            ></i>
            <Global.H4 color={color || "white"}>{sqFt || 0} Sq Ft</Global.H4>
         </DetailsWrap.Block>
      </DetailsWrap>
   );
};

export default Details;
