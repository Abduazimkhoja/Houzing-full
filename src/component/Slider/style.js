import { css, styled } from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   max-width: 1440px;
   padding: 0 30px;
   width: 100%;

   margin: 0 auto;
   .slider__container {
      height: 100%;
   }
`;

Wrapper.Window = styled.div`
   width: inherit;
   height: inherit;
   overflow: hidden;
`;

Wrapper.Content = styled.ul`
   display: flex;
   width: 100%;
   height: 100%;
   margin: 0 auto;
   transition: transform 0.6s ease;

   ${(props) =>
      css`
         transform: translateX(${-props.slideIndex}%);
      `}

   .slide__item {
      padding: 10px;
      min-width: calc(${(props) => 100 / props.quantity + "%"});
   }
   .slide__item:first-child {
      margin-left: 0;
   }
`;

Wrapper.Slide = styled.div`
   min-width: 100%;
   height: 100%;

   transition: opacity 1s ease, transform 1s ease;

   img {
      width: 100%;
      height: 100%;

      object-fit: cover;
   }
`;

Wrapper.Button = styled.button`
   min-width: 45px;
   min-height: 45px;

   border-radius: 50%;
   border: 1px solid var(--border-color, #e6e9ec);

   background: var(--color-white, #fff);

   ${(props) => props.direction === "next" && "transform: rotate(180deg);"}

   .icon-arrow {
      font-size: 12px;
      color: var(--color-cyan-blue);
   }
`;

Wrapper.Dots = styled.div`
   margin-top: 32px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
`;

Wrapper.Dot = styled.button`
   width: 10px;
   height: 10px;

   border-radius: 50%;
   border: 2px solid var(--color-white);

   background: var(--color-blue);

   transition: border-color 0.3s ease, background 0.3s ease;

   ${(props) =>
      props.active &&
      css`
         border-color: var(--color-blue);
         background: none;
      `}

   &:hover {
      border-color: var(--color-blue);
      background: none;
   }
`;
