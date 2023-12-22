import React from "react";
import { Global } from "../../../root/style";
import AlignedBlock from "../../Generic/AlignedBlock";
import { property } from "../../../utils/ProductPageData";

const ProductProperty = ({ data = {} }) => {
   const { id, price, houseDetails, category } = { ...data?.data };

   const newData = {
      id: `HZ${id}`,
      price: `$${price}`,
      category: category.name || "not known",
      area: `${houseDetails?.area} Sq Ft`,
      yearBuilt: houseDetails?.yearBuilt,
      beds: houseDetails?.beds,
      bath: houseDetails?.bath,
      garage: houseDetails?.garage,
      sale: "For sale",
   };

   return (
      <section>
         <Global.H4 margin="24px" fz="18px" fw="600">
            Property Details
         </Global.H4>

         <AlignedBlock data={newData} mapData={property} />
      </section>
   );
};

export default ProductProperty;
