import React from "react";
import { InputWrap } from "./style";
import useUniqueId from "../../../hooks/useId";

export const Input = ({ type, placeholder, width, height, icon, bg }) => {
   const useId = useUniqueId();
   return (
      <InputWrap width={width} height={height} bg={bg}>
         {icon && <i className={icon}></i>}
         <InputWrap.input placeholder={placeholder} type={type} />
      </InputWrap>
   );
};

export default Input;
