import { styled } from "styled-components";

// const filter = (props) => {};

export const InputWrap = styled.div`
   width: ${(props) => props.width || "200px"};
   height: ${(props) => props.height || "44px"};

   position: relative;

   display: flex;
   align-items: center;
   gap: 8px;

   padding: 0 16px;

   color: var(--color-cyan-blue);

   border-radius: 1px;
   border: 1px solid var(--color-white-smoke);
   background: ${(props) => props.bg || "var(--color-white)"};

   transition: border-color 0.3s ease;

   &:focus-within {
      border-color: var(--color-blue);
   }
`;

InputWrap.Input = styled.input`
   width: 100%;
   height: 100%;
   font-size: 14px;
   color: var(--color-cyan-blue);

   &::placeholder {
      font-size: 14px;
      color: var(--color-cyan-blue);
   }
`;
