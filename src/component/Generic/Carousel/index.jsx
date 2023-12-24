import React, { useRef } from "react";
import { Carousel as AntCarousel } from "antd";
import { CarouselWrap } from "./style";
import { Global } from "../../../root/style";

const Carousel = ({ children, dots, outside }) => {   
   const slider = useRef();
   const onChange = (currentSlide) => {
   };

   const onMove = ({
      target: {
         dataset: { name },
      },
   }) => {
      name === "left" ? slider.current.prev() : slider.current.next();
   };

   return (
      <CarouselWrap>
         {outside ? (
            <Global.Container>
               <AntCarousel ref={slider} dots={dots} afterChange={onChange}>
                  {children}
               </AntCarousel>
            </Global.Container>
         ) : (
            <AntCarousel ref={slider} dots={dots} afterChange={onChange}>
               {children}
            </AntCarousel>
         )}
         <CarouselWrap.Buttons>
            <CarouselWrap.Button
               onClick={onMove}
               data-name="left"
               name="left"
               left={"true"}
            >
               <i className="icon-arrow"></i>
            </CarouselWrap.Button>
            <CarouselWrap.Button
               onClick={onMove}
               data-name="right"
               name="right"
               right={"true"}
            >
               <i className="icon-arrow"></i>
            </CarouselWrap.Button>
         </CarouselWrap.Buttons>
      </CarouselWrap>
   );
};

export default Carousel;
