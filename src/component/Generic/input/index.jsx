import React, { forwardRef } from "react";
import { InputWrap } from "./style";
import useUniqueId from "../../../hooks/useId";

export const Input = forwardRef(({ type, placeholder, width, height, icon, bg}, ref) => {
   const useId = useUniqueId();
   return (
      <InputWrap ref={ref} width={width} height={height} bg={bg}>
         {icon && <i className={icon}></i>}
         <InputWrap.input placeholder={placeholder} type={type} />
      </InputWrap>
   );
});

export default Input;
