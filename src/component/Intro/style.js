import { styled } from "styled-components";

export const IntroBlock = styled.div`
   height: calc(100vh - 128px);

   position: relative;

   background: #000;
   color: #fff;

   .intro__image {
      width: inherit;
      height: inherit;

      filter: brightness(40%);

      object-position: center;
      object-fit: cover;
   }
`;

IntroBlock.Content = styled.div`
   width: inherit;
   height: inherit;

   position: absolute;
   top: 0;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   text-align: center;
`;
