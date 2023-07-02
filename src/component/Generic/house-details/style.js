import { styled } from "styled-components";
import colors from "../color";

export const DetailsWrap = styled.ul`
   max-width: ${(props) => props.width || "340px"};
   width: 100%;

   margin: ${(props) => props.margin || 0} 0;

   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: ${(props) => props.gap || "10px"};

   h5,
   i::before {
      color: ${(props) => colors(props.color) || "var(--color-white)"};
   }

   i {
      font-size: 19px;
   }
`;

DetailsWrap.Block = styled.li`
   display: flex;
   flex-direction: ${(props) => (props.row ? "row" : "column")};
   align-items: center;
   justify-content: center;
   gap: 7px;
`;
