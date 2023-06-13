import React, { forwardRef } from "react";
import { InputWrap } from "./style";
import useUniqueId from "../../../hooks/useId";
import { Obj } from "../../../root/styled";

export const Input = forwardRef(({ type, placeholder, width, height, icon, bg}, ref) => {
   return (
      <InputWrap ref={ref} width={width} height={height} bg={bg}>
         {icon && <i className={icon}></i>}
         <InputWrap.input placeholder={placeholder} type={type} />
      </InputWrap>
   );
});

export default Input;
