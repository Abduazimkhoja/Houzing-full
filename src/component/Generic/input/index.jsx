import React, { forwardRef } from "react";
import { InputWrap } from "./style";

export const Input = forwardRef(({title, name, onChange,onClick, type, placeholder, width, maxwidth, height, icon, bg, defaultValue, min,max}, ref) => {

   return (
      <InputWrap  ref = {ref} maxwidth={maxwidth} onChange={onChange} type = {type} width={width} height={height} bg={bg}>
         {icon && <i className={`${icon} "input__icon"`}></i>}
         <InputWrap.Input min={min} max={max} defaultValue = {defaultValue}  onClick={onClick} name = {name} placeholder={placeholder} type={type}  title={title}/>
      </InputWrap>
   );
});

export default Input;
