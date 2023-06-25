import { styled } from "styled-components";

export const Filter = styled.div`
   border-radius: 6px;
   padding-top: 30px;
   background: var(--color-white);
`;

Filter.Block = styled.div`
   padding: 0 30px;
   margin-bottom: 20px;
`;

Filter.Inputs = styled.div`
   display: flex;
   gap: 20px;

   .ant-select-selector {
      display: flex;
      align-items: center;
      height: 44px !important;
      border-radius: 1px;
      border: 1px solid var(--color-white-smoke) !important;
      &:hover,
      &:focus {
         border: 1px solid var(--color-blue) !important;
      }
   }
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
