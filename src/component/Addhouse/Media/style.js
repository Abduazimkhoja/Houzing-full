import { styled } from "styled-components";

export const Images = styled.img`
   width: inherit;
   height: inherit;
   object-fit: cover;
   object-position: center;
`;

export const ImageBlock = styled.div`
   width: 150px;
   height: 150px;
   position: relative;
   background-color: var(--color-gray);
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   i,
   .icon-trash::before,
   img {
      transition: background 0.6s ease, opacity 0.6s ease, color 0.6s ease,
         filter 0.6s ease;
   }

   &:hover {
      i {
         background: var(--color-red);
      }
      .icon-trash::before {
         opacity: 1;
         color: var(--color-white);
      }
      img {
         filter: brightness(0.35);
      }
   }
   i {
      width: 50px;
      height: 50px;

      position: absolute;
      inset: 0;
      margin: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      &::before {
         opacity: 0;
         font-size: 20px;
      }
   }
`;
