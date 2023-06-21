import React from "react";
import { Wrapper } from "./style";

const CategoryCard = ({ data = {}, bg }) => {
   const {} = data;
   return (
      <Wrapper bg = {bg}>
         <span className="icon icon-house"></span>
         <h4>text</h4>
      </Wrapper>
   );
};

export default CategoryCard;
