import { styled } from "styled-components";

export const Filter = styled.div`
   border-radius: 6px;
   padding-top: 30px;
   background: var(--color-white);
`;

Filter.block = styled.div`
   padding: 0 30px;
   margin-bottom: 20px;
`;

Filter.Inputs = styled.div`
   display: flex;
   gap: 20px;
`;

Filter.Footer = styled.div`
   height: 84px;
   padding: 20px 30px;

   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 20px;

   border-radius: 0px 0px 6px 6px;

   background: var(--color-closely-white);
`;
