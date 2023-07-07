import React from "react";
import { Global } from "../../../root/style";
import { commentStats } from "../../../utils/ProductPageData";
import { Progress } from "./style";

const ProductComment = () => {
   const randomStats = () => (Math.random() * 5).toFixed(1);

   const staticData = {
      Cleanliness: randomStats(),
      Communication: randomStats(),
      "Check-in": randomStats(),
      Accuracy: randomStats(),
      Location: randomStats(),
      Value: randomStats(),
   };

   const reviewsAverage = Object.values(staticData).reduce(
      (a, b) => Number(a) + Number(b)
   );

   return (
      <section>
         <Global.H4 margin="24px" fz="18px" fw="600">
            {reviewsAverage} (no reviews)
         </Global.H4>

         <Global.Flex gap="20px" ai="flex-start" fxd="row" jc="space-between">
            {commentStats.map((item, index) => (
               <Global.Flex
                  width="382px"
                  key={index}
                  ai="flex-start"
                  gap="20px"
               >
                  {item.map(({ id, stats }) => {
                     return (
                        <Global.FlexRowCenter
                           jcsb="true"
                           width="100%"
                           key={id}
                           gap="10px"
                        >
                           <Global.H5>{stats}</Global.H5>
                           <Global.FlexRowCenter gap="17px">
                              <Progress
                                 max={5}
                                 value={`${staticData[stats]}`}
                              ></Progress>
                              <Global.H5 color="cyanBlue">
                                 {staticData[stats]}
                              </Global.H5>
                           </Global.FlexRowCenter>
                        </Global.FlexRowCenter>
                     );
                  })}
               </Global.Flex>
            ))}
         </Global.Flex>
      </section>
   );
};

export default ProductComment;
