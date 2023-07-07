import React from "react";
import { Global } from "../../../root/style";
import YandexMap from "../../Generic/YandexMap";
import { location } from "../../../utils/ProductPageData";

const ProductLocation = ({ data }) => {
   return (
      <section>
         <Global.H4 margin="16px" fz="18px" fw="600">
            Location
         </Global.H4>
         <Global.Flex margin = "24px" gap = "20px" ai="flex-start" fxd="row" jc="space-between">
            {location.map((item) => (
               <Global.Flex ai="flex-start" gap="24px">
                  {item.map(({ id, title, name }) => {
                     return (
                        <Global.FlexRowCenter key={id} gap="10px">
                           <Global.H5 fw="600">{title}</Global.H5>
                           <Global.H5>{data[name]}</Global.H5>
                        </Global.FlexRowCenter>
                     );
                  })}
               </Global.Flex>
            ))}
         </Global.Flex>
         <YandexMap />
      </section>
   );
};

export default ProductLocation;
