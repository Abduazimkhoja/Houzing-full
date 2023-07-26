import { styled } from "styled-components";

export const InputWrap = styled.div`
   max-width: ${(props) => props.maxwidth || "auto"};
   width: ${(props) => props.width || "200px"};
   height: ${(props) => props.height || "44px"};

   position: relative;

   display: flex;
   align-items: center;

   color: var(--color-cyan-blue);

   border-radius: 1px;
   border: 1px solid var(--color-white-smoke);
   background: ${(props) => props.bg || "var(--color-white)"};

   transition: border-color 0.3s ease;

   &:focus-within,
   &:hover {
      border-color: var(--color-blue);
   }

   i {
      margin-left: 16px;
   }
`;

InputWrap.Input = styled.input`
   width: 100%;
   height: 100%;

   padding: 0 8px;

   font-size: 14px;
   color: var(--color-cyan-blue);

   &::placeholder {
      font-size: 14px;
      color: var(--color-cyan-blue);
   }
`;
