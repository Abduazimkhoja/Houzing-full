import React from "react";
import { Global } from "../../../root/style";

const Description = ({ description = "description" }) => {
   return (
      <>
         <Global.H4 margin="16px" fz="18px" fw="600">
            Description
         </Global.H4>
         <Global.H5>{description}</Global.H5>
      </>
   );
};

export default Description;
