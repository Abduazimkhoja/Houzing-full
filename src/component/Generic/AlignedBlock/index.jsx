import React from "react";
import { Global } from "../../../root/style";

const AlignedBlock = ({
   data = [],
   mapData = [],
   margin = "24px",
   gap = "24px",
}) => {
   return (
      <Global.Flex
         margin={margin}
         gap="20px"
         ai="flex-start"
         fxd="row"
         jc="space-between"
      >
         {mapData.map((item, index) => (
            <Global.Flex key = {index} ai="flex-start" gap={gap}>
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
   );
};

export default AlignedBlock;
