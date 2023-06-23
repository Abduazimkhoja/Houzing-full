import { styled } from "styled-components";

export const CarouselWrap = styled.section`
   position: relative;

   .slick-dots {
      align-items: center;
      gap: 13px;

      &-bottom {
         bottom: 32px;
      }

      li {
         width: 8px;
         height: 8px;
         &.slick-active {
            width: 10px;
            height: 10px;
            button {
               border: 2px solid var(--color-white);
               background: none;
            }
         }

         button {
            background: #fff;
            opacity: 1;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            &::before {
               content: "";
               display: none;
            }
         }
      }
   }
`;

CarouselWrap.Buttons = styled.div`
   display: block;
   max-width: 1440px;
   width: 100%;
   padding: 0 30px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%);
`;

CarouselWrap.Button = styled.button`
   width: 45px;
   height: 45px;

   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   ${(props) =>
      props.name === "left"
         ? "left: 30px;"
         : "right: 30px; transform: translateY(-50%) rotate(180deg);"}

   background: #FFFFFF20;
   border-radius: 50%;

   transition: transform 0.3s ease, background 0.3s ease;
   &:hover {
      background: var(--color-gray);
      ${(props) =>
         props.name === "left"
            ? "transform: translateY(-50%) scale(1.05);"
            : "transform: translateY(-50%) rotate(180deg) scale(1.05);"}
   }

   &:active {
      background: #ffffff20;

      ${(props) =>
         props.name === "left"
            ? "transform: translateY(-50%);"
            : "transform: translateY(-50%) rotate(180deg);"}
   }

   i {
      color: #fff;
      font-size: 12px;
   }
`;
