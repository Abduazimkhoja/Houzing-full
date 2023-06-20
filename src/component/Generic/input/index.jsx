import React, { forwardRef } from "react";
import { InputWrap } from "./style";

export const Input = forwardRef(({name, onChange,onClick, type, placeholder, width, height, icon, bg, defaultValue}, ref) => {

   return (
      <InputWrap  ref = {ref} onChange={onChange} type = {type} width={width} height={height} bg={bg}>
         {icon && <i className={icon}></i>}
         <InputWrap.Input defaultValue = {defaultValue}  onClick={onClick} name = {name} placeholder={placeholder} type={type} />
      </InputWrap>
   );
});

export default Input;
