import React from "react";
import { InputWrap } from "./style";
import useUniqueId from "../../../hooks/useId";

export const Input = ({ type, placeholder, width, height, icon, bg }) => {
   const useId = useUniqueId();
   return (
      <InputWrap>
         {icon && <i className={icon}></i>}
         <InputWrap.input
            bg={bg}
            width={width}
            height={height}
            placeholder={placeholder}
            type={type}
         />
      </InputWrap>
   );
};
