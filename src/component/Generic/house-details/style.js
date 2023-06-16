import { styled } from "styled-components";
import colors from "../color";

export const DetailsWrap = styled.ul`
   width: ${(props) => props.width || "340px"};
   margin: ${props => props.margin || 0} 0;

   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;

   h4,
   i::before {
      color: ${(props) => colors(props.color) || "var(--color-white)"};
   }
`;

DetailsWrap.Block = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 7px;
`;
