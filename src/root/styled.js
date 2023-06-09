import { styled } from "styled-components";
import colors from "../utils/color";

export const Global = styled.div``;

Global.fullBG = styled.section`
   background: var(${(props) => colors(props.bg)});
`;

Global.container = styled.div`
   margin: 0 auto;
   max-width: 1180px;
   width: 100%;
`;

Global.logo = styled.i.attrs((props) => ({ className: "icon-logo" }))`
   background: none;
   cursor: pointer;
   font-size: 40px;
`;
