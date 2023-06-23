import React from "react";

import CategoryCard from "../Generic/card/category";
import { useData } from "../../hooks/useData";
import { Wrapper } from "./style";
import { Global } from "../../root/style";
import { GenericSlider } from "../Generic";
import { useNavigate } from "react-router-dom";

const Category = () => {
   const [data, setData] = useData("/categories/list");
   const navigate = useNavigate();

   return (
      <GenericSlider>
         {data.map((value) => (
            <CategoryCard
               key={value.id}
               name={value.name}
               onClick={() => navigate(`/properties/?category_id=${value.id}`)}
            />
         ))}
      </GenericSlider>
   );
};

export default Category;
