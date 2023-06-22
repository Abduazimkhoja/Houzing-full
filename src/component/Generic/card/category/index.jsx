import React from "react";
import { Wrapper } from "./style";

const CategoryCard = ({ name, bg }) => {
   return (
      <Wrapper bg = {bg}>
         <span className="icon icon-house"></span>
         <h4>{name}</h4>
      </Wrapper>
   );
};

export default CategoryCard;
