import React, { useRef } from "react";
import { Carousel as AntCarousel } from "antd";
import { CarouselWrap, Intro } from "./style";



const Carousel = ({ children, dots }) => {
   const slider = useRef();
   const onChange = (currentSlide) => {
      console.log(currentSlide);
   };
   const onMove = ({ target: { name } }) => {
      name === "left" ? slider.current.prev() : slider.current.next()
   };
   return (
      <CarouselWrap>
         <AntCarousel ref={slider} dots={dots} afterChange={onChange}>
            {children}
         </AntCarousel>
         <CarouselWrap.Buttons>
            <CarouselWrap.Button onClick={onMove} name="left" left={"true"}>
               <i className="icon-arrow"></i>
            </CarouselWrap.Button>
            <CarouselWrap.Button onClick={onMove} name="right" right={"true"}>
               <i className="icon-arrow"></i>
            </CarouselWrap.Button>
         </CarouselWrap.Buttons>
      </CarouselWrap>
   );
};

export default Carousel;
