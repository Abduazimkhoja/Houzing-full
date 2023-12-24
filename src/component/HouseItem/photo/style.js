import styled from "styled-components";

export const ImageBox = styled.div`
   height: 400px;
   margin: 24px 0;

   display: flex;
   align-items: center;
   justify-content: center;

   overflow: hidden;

   & .child-box {
      width: 50%;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      & .image {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      & .image-other {
         & img {
            filter: brightness(0.4);
            cursor: pointer;

            transition: filter 0.6s ease;

            &:hover {
               filter: brightness(0.8);
            }
         }
         & span {
         }
      }
   }
   & .image-first {
      width: 50%;
      margin-right: 20px;
      object-fit: cover;
   }
`;
