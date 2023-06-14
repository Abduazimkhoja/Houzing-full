import React, { forwardRef } from "react";
import { InputWrap } from "./style";

export const Input = forwardRef(({ onClick, type, placeholder, width, height, icon, bg}, ref) => {

   return (
      <InputWrap ref = {ref} onClick={onClick} type = {type} width={width} height={height} bg={bg}>
         {icon && <i className={icon}></i>}
         <InputWrap.Input placeholder={placeholder} type={type} />
      </InputWrap>
   );
});

export default Input;
