import { css, styled } from "styled-components";

const filter = (props) => {

}

export const InputWrap = styled.div`
   width: ${props => props.width || "100%"};
   height: ${props => props.height || "44px"};

   position: relative;

   display: flex;
   align-items: center;
   gap: 8px;

   padding: 0 16px;

   color: var(--color-cyan-blue);

   border-radius: 1px;
   border: 1px solid var(--color-white-smoke);
   background: ${props => props.bg || "--color-white"};

   transition: border-color .3s ease;

   &:focus-within {
      border-color: var(--color-blue);
   }
`;

InputWrap.input = styled.input`
   width: 100%;
   height: 100%;
   font-size: 14px;
   color: var(--color-cyan-blue);
   &::placeholder {
      color: var(--color-cyan-blue);
   }
`;

// InputWrap.label = styled.label`
//    position: absolute;
//    top: 15px;
// `