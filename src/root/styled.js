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

Global.h2 = styled.h2`
   font-weight: 700;
   font-size: 44px;
   line-height: 48px;
   letter-spacing: -0.02em;

   color: ${(props) => colors(props.color) || "var(--color-white)"};
`;

Global.h3 = styled.h3`
   font-weight: 600;
   font-size: 28px;
   line-height: 36px;

   text-align: center;
   letter-spacing: -0.02em;

   color: ${(props) => colors(props.color) || "var(--color-cyan-blue)"};
`;
Global.h4 = styled.h4`
   font-weight: ${(props) => props.fw || 400};
   font-size: 16px;
   line-height: 24px;

   color: ${(props) => colors(props.color) || "var(--color-gray)"};
`;
