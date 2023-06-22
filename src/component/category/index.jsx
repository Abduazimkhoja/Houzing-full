import React from "react";

import { Carousel } from "../Generic";
import CategoryCard from "../Generic/card/category";
import { useData } from "../../hooks/useData";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { GenericSlider } from "../Generic";

const Category = () => {
   const [data, setData] = useData("/categories/list", false);

   return (
      <GenericSlider>
         {data.map((value) => (
            <CategoryCard name={value.name} />
         ))}
      </GenericSlider>
   );
};

export default Category;
