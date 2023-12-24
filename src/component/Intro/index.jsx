import React from "react";
import { Carousel, Button, Details } from "../Generic";
import { IntroBlock } from "./style";
import { Global } from "../../root/style";

const Intro = ({data}) => {
   return (
      <Carousel>
         {data.map(
            ({ id, name, houseDetails, price, address, attachments }) => {
               return (
                  <IntroBlock key={id}>
                     <img
                        className="intro__image"
                        src={attachments[0]?.imgPath}
                        alt=""
                     />
                     <IntroBlock.Content>
                        <Global.H2 margin="8px">{name}</Global.H2>
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
