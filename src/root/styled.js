import { styled } from "styled-components";
import colors from "../component/Generic/color";

export const Global = styled.div``;

Global.fullBG = styled.section`
   background: ${(props) => colors(props.bg)};
`;

Global.container = styled.div`
   max-width: 1240px;
   width: 100%;

   margin: 0 auto;
   padding: 0 30px;
`;

Global.logo = styled.i.attrs((props) => ({ className: "icon-logo" }))`
   background: none;

   font-size: 40px;
   color: var(--color-white);
   
   cursor: pointer;
`;
