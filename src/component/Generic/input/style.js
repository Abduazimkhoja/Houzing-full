import { styled } from "styled-components";

const filter = (props) => {
   return {
      gray: css``,
      default: css``
   }[props.type || "default"]
}

export const Input = styled.input`

`