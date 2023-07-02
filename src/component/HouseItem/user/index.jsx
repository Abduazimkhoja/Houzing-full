import React from "react";
import { Wrapper } from "./style";
import { Global } from "../../../root/style";
import { Button } from "../../Generic";
import { Checkbox } from "antd";

const UploaderUser = (props) => {
   return (
      <Wrapper>
         <Global.Flex ai="normal" gap="24px">
            <Global.FlexRowCenter jcsb="true" gap="10px">
               <Wrapper.Photo />
               <div>
                  <Global.H4 fw="600">{props?.user?.firstname || "no name"}</Global.H4>
                  <Global.H4>
                     {props?.user?.phone || "no phone number"}
                  </Global.H4>
               </div>
            </Global.FlexRowCenter>
            <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
            <Button width="100%">Send request</Button>
         </Global.Flex>
      </Wrapper>
   );
};

export default UploaderUser;
