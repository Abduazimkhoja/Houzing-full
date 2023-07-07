import React from "react";
import { Global } from "../../../root/style";
import { features } from "../../../utils/ProductPageData";

const ProductFeatures = () => {
   return (
      <section>
         <Global.H4 margin="24px" fz="18px" fw="600">
            Property Details
         </Global.H4>

         <Global.Flex gap="20px" ai="flex-start" fxd="row" jc="space-between">
            {features.map((item, index) => (
               <Global.Flex key={index} ai="flex-start" gap="24px">
                  {item.map(({ id, icon, text }) => {
                     return (
                        <Global.FlexRowCenter key={id} gap="10px">
                           <Global.CircleIcon>
                              <i className={`icon-${icon}`}></i>
                           </Global.CircleIcon>
                           <Global.H5>{text}</Global.H5>
                        </Global.FlexRowCenter>
                     );
                  })}
               </Global.Flex>
            ))}
         </Global.Flex>
      </section>
   );
};

export default ProductFeatures;
