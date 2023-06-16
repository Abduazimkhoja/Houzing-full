import React from "react";
import { Carousel, Button, Details } from "../Generic";
import { IntroBlock } from "./style";
import { Global } from "../../root/style";

const Intro = () => {
   return (
      <Carousel>
         <IntroBlock>
            <img
               className="intro__image"
               src="https://snipp.ru/demo/560/image.jpeg"
               alt=""
            />
            <IntroBlock.Content>
               <Global.H2>title</Global.H2>
               <Global.H4 color="white">subtitle</Global.H4>
               <Details margin = "24px" beds="4" baths="4" garage="4" sqFt="4" />
               <Global.H3 color="white">$price</Global.H3>
               <Button type="white" width="180px">
                  Read more
               </Button>
            </IntroBlock.Content>
         </IntroBlock>
         <IntroBlock>1</IntroBlock>
         <IntroBlock>1</IntroBlock>
         <IntroBlock>1</IntroBlock>
      </Carousel>
   );
};

export default Intro;
