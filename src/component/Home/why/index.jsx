import React from "react";
import { Wrapper } from "./style";
import { Global } from "../../../root/style";
import { whyData } from "../../../utils/why";

const Why = () => {
   return (
      <Global.FullBg bg= "whiteLilac" padding = "48px">
         <Global.H3 margin="8">Why Choose Us</Global.H3>
         <Global.H4 ta="center" margin="32px">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </Global.H4>
         <Global.Container>
            <Wrapper.Content>
               {whyData.map(({ id, icon, title, subtitle }) => (
                  <Wrapper.Block key={id}>
                     <span className={`icon-${icon} icon`}></span>
                     <Global.H4 margin = "8px" fz = "18px" ta="center" fw={600}>
                        {title}
                     </Global.H4>
                     <Global.H4 ta="center">{subtitle}</Global.H4>
                  </Wrapper.Block>
               ))}
            </Wrapper.Content>
         </Global.Container>
      </Global.FullBg>
   );
};

export default Why;
