import React from "react";
import { Global } from "../../../root/style";
import { Button } from "../../Generic";

const Banner = () => {
   return (
      <Global.FullBg
         height="570px"
         url="https://cloud.famproperties.com/project/large/blue-views-751999-123309.jpg"
      >
         <Global.Container>
            <Global.FlexCenter column = "true">
               <Global.Limiter width = "570px">
                  <Global.H3 color="white" margin="48px" >
                     Vermont Farmhouse With Antique Jail Is the Week's Most Popular
                     Home
                  </Global.H3>
               </Global.Limiter>
               <Button width = "180px">Read more</Button>
            </Global.FlexCenter>
         </Global.Container>
      </Global.FullBg>
   );
};

export default Banner;
