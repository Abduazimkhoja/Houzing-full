// import React, { useRef, useState } from "react";
// import { InputStyle, PlaceholderLabel, Position } from "./style";
// import useUniqueId from "../../../hooks/useId";

// export const Input = (props) => {
//    const useId = useUniqueId();
//    const inputValue = useRef();
//    const [status, setStatus] = useState("");
//    return (
//       <Position>
//          <PlaceholderLabel htmlFor={useId}>
//             {props.placeholder}
//          </PlaceholderLabel>
//          <InputStyle
//             ref={inputValue}
//             status={status}
//             id={useId}
//             type={props.type}
//          />
//       </Position>
//    );
// };
