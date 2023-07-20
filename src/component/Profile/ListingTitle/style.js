import { styled } from "styled-components";

export const CardRow = styled.div``;

CardRow.Image = styled.img`
   width: 130px;
   height: 130px;

   object-fit: cover;
   object-position: center;

   filter: brightness(0.5);

   transition: filter 0.2s ease;
   cursor: pointer;

   &:hover {
      filter: brightness(1);
   }
`;

CardRow.Sale = styled.div`
   position: absolute;
   top: 20px;
   ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
   z-index: 2;

   padding: 5px 12px;

   font-weight: 600;
   font-size: 10px;
   line-height: 13px;
   text-transform: uppercase;

   border-radius: 4px;

   background: ${(props) =>
      props.bg === "blue" ? "var(--color-blue)" : "var(--color-cyan-blue)"};
   color: var(--color-white);
`;
