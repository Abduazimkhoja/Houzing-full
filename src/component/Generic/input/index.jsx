import React, { forwardRef } from "react";
import { InputWrap } from "./style";

export const Input = forwardRef(({ type, placeholder, width, height, icon, bg}, ref) => {
   return (
      <InputWrap ref={ref} width={width} height={height} bg={bg}>
         {icon && <i className={icon}></i>}
         <InputWrap.Input placeholder={placeholder} type={type} />
      </InputWrap>
   );
});

export default Input;
