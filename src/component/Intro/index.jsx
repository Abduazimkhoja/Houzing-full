import React from "react";
import Carousel from "../Carousel";
import { IntroBlock } from "./style";
import { Global } from "../../root/style";
import Button from "../Generic/button/style";

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
               <Global.H4 color = "white">subtitle</Global.H4>
               <Global.H3 color = "white">$price</Global.H3>
               <Button type="white" width = "180px">Read more</Button>
            </IntroBlock.Content>
         </IntroBlock>
         <IntroBlock>1</IntroBlock>
         <IntroBlock>1</IntroBlock>
         <IntroBlock>1</IntroBlock>
      </Carousel>
   );
};

export default Intro;
