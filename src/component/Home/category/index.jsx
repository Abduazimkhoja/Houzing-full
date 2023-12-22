import React from "react";

// import CategoryCard from "../../Generic/card/category";
// import { useData } from "../../../hooks/useData";
// import { GenericSlider } from "../../Generic";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../Generic/card/category";
import { useData } from "../../../hooks/useData";
import { Wrapper } from "./style";
import Slider from "../../Slider";
import { Global } from "../../../root/style";

const Category = () => {
   const [data] = useData("/categories/list");
   const navigate = useNavigate();

   return (
      <Wrapper>
         <Global.H3 margin="8">Category</Global.H3>
         <Global.H4 ta="center" margin="32px">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </Global.H4>

         <Slider dataLength={data.length}>
            {data.map((value) => (
               <li className="slide__item">
                  <CategoryCard
                     key={value.id}
                     name={value.name}
                     onClick={() =>
                        navigate(`/properties/?category_id=${value.id}`)
                     }
                  />
               </li>
            ))}
         </Slider>
      </Wrapper>
   );
};

export default Category;
