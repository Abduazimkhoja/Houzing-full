import React, { useState } from "react";
import { useData } from "../../hooks/useData";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import CategoryCard from "../Generic/card/category";

const Slider = ({quantity = 4}) => {
   const [data] = useData("/categories/list");

   const [slideIndex, setSlideIndex] = useState(0);

   const slideBlocksSum = data.length / quantity

   const nextSlide = () => {
      slideIndex !== (slideBlocksSum - 1) * 100 && setSlideIndex(slideIndex + 100);
   };

   const prevSlide = () => {
      slideIndex !== 0 && setSlideIndex(slideIndex - 100);
   };

   // const slidePosition = (index) => {
   //    let slideActive = slideIndex === index + 1;
   //    let slidePrev =
   //       (slideIndex === 1 && index + 1 === data.length) ||
   //       slideIndex - 1 === index + 1;

   //    return `${slideActive ? "slide-active" : ""}${
   //       slidePrev ? "slide-prev" : ""}`;
   // };


   return (
      <Wrapper>
         <Wrapper.Button direction="prev" onClick={prevSlide}>
            <span className="icon-arrow"></span>
         </Wrapper.Button>

         <Global.Container className="slider__container">
            <Wrapper.Window>
               <Wrapper.Content slideIndex={slideIndex}>
                  {data.map((item, index) => {
                     return (
                        // <Wrapper.Slide
                        //    key={item.id}
                        //    // position = {index+1}
                        // >
                           <CategoryCard name = {item.name}/>
                        // {/* </Wrapper.Slide> */}
                     );
                  })}
               </Wrapper.Content>
            </Wrapper.Window>

            <Wrapper.Dots>
               {Array.from({ length: slideBlocksSum}).map((item, index) => (
                  <Wrapper.Dot
                     active={slideIndex === index * 100}
                     onClick={() => setSlideIndex(index * 100)}
                  ></Wrapper.Dot>
               ))}
            </Wrapper.Dots>
         </Global.Container>

         <Wrapper.Button direction="next" onClick={nextSlide}>
            <span className="icon-arrow"></span>
         </Wrapper.Button>
      </Wrapper>
   );
};

export default Slider;
