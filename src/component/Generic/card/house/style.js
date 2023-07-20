import { styled } from "styled-components";

export const Card = styled.div`
   width: 100%;
   max-width: 475px;
   min-width: 310px;

   border-radius: 3px;
   overflow: hidden;

   background: var(--color-white);

   cursor: pointer;

   &:hover {
      box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.06),
         0px 7px 46px 0px rgba(0, 0, 0, 0.06),
         0px 20px 38px 0px rgba(0, 0, 0, 0.06);
   }
`;

Card.Head = styled.div`
   width: inherit;
   height: 220px;

   position: relative;
`;

Card.Image = styled.img`
   width: inherit;
   height: inherit;

   object-fit: cover;
   object-position: center;

   transition: filter 0.3s ease;

   &:hover {
      filter: brightness(0.35);
   }
`;

Card.TopInfo = styled.div`
   position: absolute;
   top: 20px;
   ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
   z-index: 2;

   padding: 5px 12px;

   font-weight: 600;
   font-size: 10px;
   line-height: 13px;
   text-transform: uppercase;

   background: ${(props) =>
      props.bg === "blue" ? "var(--color-blue)" : "var(--color-cyan-blue)"};
   color: var(--color-white);
`;

Card.Content = styled.div`
   padding: 24px 20px 16px 20px;

   border-right: 1px solid var(--color-white-smoke);
   border-left: 1px solid var(--color-white-smoke);
`;

Card.Footer = styled.div`
   width: inherit;
   height: 60px;

   padding: 8px 20px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   border: 1px solid var(--color-white-smoke);

   .card__resize {
      font-size: 15px;
      transition: transform 0.3s ease;
      cursor: pointer;
      &:hover {
         transform: scale(1.05);
      }
      &:active {
         transform: scale(1);
      }
   }

   .card__buttons {
      display: flex;
      align-items: center;
      gap: 20px;
   }
`;

Card.UserPhoto = styled.img`
   width: 38px;
   height: 38px;

   position: absolute;
   bottom: -19px;
   right: 20px;
   z-index: 2;

   object-fit: cover;
   object-position: center;

   border-radius: 50%;
   border: 2px solid var(--color-white);
`;
