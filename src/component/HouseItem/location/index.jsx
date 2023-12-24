import React from "react";
import { Global } from "../../../root/style";
import YandexMap from "../../Generic/YandexMap";
import { location } from "../../../utils/ProductPageData";
import AlignedBlock from "../../Generic/AlignedBlock";

const ProductLocation = ({ data = {} }) => {
   const { address, city, region, zipCode, country } = { ...data };

   const newData = {
      address,
      city,
      region,
      zipCode,
      country,
   };

   return (
      <section>
         <Global.H4 margin="24px" fz="18px" fw="600">
            Location
         </Global.H4>
         <AlignedBlock data={newData} mapData={location} />
         <YandexMap />
      </section>
   );
};

export default ProductLocation;
