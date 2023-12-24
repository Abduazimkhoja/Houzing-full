import React from "react";
import { Global } from "../../../root/style";
import Details from "../../Generic/house-details";

const ProductInfo = ({ data }) => {
   const {
      address,
      city,
      country,
      region,
      houseDetails,
      price,
      salePrice,
      name,
   } = data;

   return (
      <>
         <Global.FlexRowCenter margin="48px" jcsb="true">
            <div>
               <Global.H4 margin="8px" fz="24px" fw="600">
                  {name}
               </Global.H4>
               <Global.H4 margin="32px">
                  {address}, {city}, {country}, {region}
               </Global.H4>
               <Details
                  houseDetails={houseDetails}
                  gap="24px"
                  color="gray"
                  row="true"
                  width="fit-content"
                  year="true"
               />
            </div>
            <div>
               <Global.FlexRowCenter gap="26px" margin="25px">
                  <Global.FlexRowCenter gap="10px">
                     <Global.CircleIcon>
                        <i className="icon icon-share"></i>
                     </Global.CircleIcon>
                     <Global.H5>Share</Global.H5>
                  </Global.FlexRowCenter>
                  <Global.FlexRowCenter gap="10px">
                     <Global.CircleIcon bg="red">
                        <i className="icon icon-love"></i>
                     </Global.CircleIcon>
                     <Global.H5> Save</Global.H5>
                  </Global.FlexRowCenter>
               </Global.FlexRowCenter>
               <div>
                  <Global.Flex ai="end" gap="8px">
                     {salePrice !== 0 ? (
                        <>
                           <Global.OldPrice>${salePrice}/mo</Global.OldPrice>
                           <Global.Price>${price}/mo</Global.Price>
                        </>
                     ) : (
                        <>
                           <Global.Price>${price}/mo</Global.Price>
                        </>
                     )}
                  </Global.Flex>
                  <Global.Flex ai="end" gap="8px">
                     <Global.H5>Est. Mortgage</Global.H5>
                  </Global.Flex>
               </div>
            </div>
         </Global.FlexRowCenter>

      </>
   );
};

export default ProductInfo;
