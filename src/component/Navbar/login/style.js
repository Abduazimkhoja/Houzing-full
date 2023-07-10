import { styled } from "styled-components";

export const DropdownRender = styled.div`
   padding: 16px;

   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 8px;

   border-radius: 4px;
   background: var(--color-white);

   button {
      background: none;
      transition: opacity 0.3s ease;

      &:hover {
         opacity: 0.8;
      }
   }
`;
