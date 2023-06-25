import React from "react";
import { Carousel, Button, Details } from "../Generic";
import { IntroBlock } from "./style";
import { Global } from "../../root/style";
import { useData } from "../../hooks/useData";

const Intro = () => {
   const [data] = useData("/houses/list");

   return (
      <Carousel>
         {data.map(
            ({
               id,
               description,
               houseDetails,
               price,
               address,
               attachments,
            }) => {
               return (
                  <IntroBlock key={id}>
                     <img
                        className="intro__image"
                        src={attachments[0].imgPath}
                        alt="House photo"
                     />
                     <IntroBlock.Content>
                        <Global.H2 margin="8px">{description}</Global.H2>
                        <Global.H4 color="white">{address}</Global.H4>
                        <Details margin="24px" houseDetails={houseDetails} />
                        <Global.H3 margin="48px" color="white">
                           ${price}
                        </Global.H3>
                        <Button type="white" width="180px">
                           Read more
                        </Button>
                     </IntroBlock.Content>
                  </IntroBlock>
               );
            }
         )}
      </Carousel>
   );
};

export default Intro;
