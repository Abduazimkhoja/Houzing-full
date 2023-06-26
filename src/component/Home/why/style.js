import { styled } from "styled-components";

export const Wrapper = styled.div`

   padding: 48px 0;

   background: var(--color-white-lilac);
`;

Wrapper.Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
`;

Wrapper.Block = styled.div`
   max-width: 245px;
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .icon {
      width: 100px;
      height: 100px;

      margin-bottom: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 50px;

      border-radius: 50%;
      transition: background .3s ease, color .3s ease;

      &:hover {
         background: var(--color-blue);
         &::before {
            color: var(--color-white);
         }
      }
   }
`;
