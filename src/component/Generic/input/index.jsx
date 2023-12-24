import React, { forwardRef } from "react";
import { InputWrap } from "./style";

export const Input = forwardRef((props, ref) => {
   const { icon, maxwidth, width, height, bg, id, ...inputAttrs } = props;
   return (
      <InputWrap
         key={id}
         maxwidth={maxwidth}
         width={width}
         height={height}
         bg={bg}
      >
         {icon && <i className={`${icon} "input__icon"`}></i>}
         <InputWrap.Input {...inputAttrs} ref={ref} />
      </InputWrap>
   );
});

export default Input;
