import { styled } from "styled-components";

export const IntroBlock = styled.div`
   height: calc(100vh - 128px);

   position: relative;

   color: var(--color-white);

   .intro__image {
      width: inherit;
      height: inherit;

      filter: brightness(0.2);

      object-position: center;
      object-fit: cover;
   }
`;

IntroBlock.Content = styled.div`
   width: 600px;
   height: inherit;

   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   text-align: center;
`;
