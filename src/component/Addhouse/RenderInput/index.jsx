import React from "react";
import { Input } from "../../Generic";

export const RenderInputs = (props) => {
   const { parentObjectName, inputs, formikValue, index, ...rest } = props;

   const getValue = (item) => {
      const name = item?.name.split(".")[1] || item.name;
      const value = parentObjectName
         ? formikValue?.[parentObjectName]?.[name]
         : formikValue?.[name];

      return value;
   };

   return inputs.map((item, index) => {
      const attrs = {
         ...item,
         ...rest,
         value: getValue(item),
         key: item.id + index,
      };

      return <Input {...attrs} />;
   });
};
