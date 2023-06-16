import { styled } from "styled-components";

export const DetailsWrap = styled.ul`
   width: ${props => props.width || "340px"};
   background: #000;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
`;

DetailsWrap.Block = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 7px;
`;
