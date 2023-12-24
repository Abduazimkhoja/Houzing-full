import React, { useState } from "react";
// import { useData } from "../../hooks/useData";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
// import CategoryCard from "../Generic/card/category";

const Slider = ({ dataLength, quantity = 4, children }) => {
   const [slideIndex, setSlideIndex] = useState(0);

   const slideBlocksSum = Math.round(dataLength / quantity);

   const nextSlide = () => {
      if (slideIndex !== (slideBlocksSum - 1) * 100) {
         setSlideIndex(slideIndex + 100);
      }
   };

   const prevSlide = () => {
      if (slideIndex !== 0) setSlideIndex(slideIndex - 100);
   };

   return (
      <Wrapper>
         <Wrapper.Button direction="prev" onClick={prevSlide}>
            <span className="icon-arrow"></span>
         </Wrapper.Button>

         <Global.Container className="slider__container">
            <Wrapper.Window>
               <Wrapper.Content quantity={+quantity} slideIndex={slideIndex}>
                  {children}
               </Wrapper.Content>
            </Wrapper.Window>

            <Wrapper.Dots>
               {Array.from({ length: slideBlocksSum }).map((item, index) => (
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
