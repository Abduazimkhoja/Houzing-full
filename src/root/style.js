import { styled } from "styled-components";
import colors from "../component/Generic/color";

export const Global = styled.div``;

Global.FillBg = styled.section`
   background: ${(props) => colors(props.bg)};
`;

Global.Container = styled.div`
   position: relative;
   max-width: 1240px;
   width: 100%;

   margin: 0 auto;
   padding: 0 30px;
`;

Global.Logo = styled.i.attrs((props) => ({ className: "icon-logo" }))`
   background: none;

   font-size: 40px;
   color: var(--color-white);

   cursor: pointer;
`;

Global.H2 = styled.h2`
   margin-bottom: ${(props) => props.margin || 0};

   font-weight: 700;
   font-size: 44px;
   line-height: 48px;
   letter-spacing: -0.02em;

   text-align: center;

   color: ${(props) =>
      props.color ? colors(props.color) : "var(--color-white)"};
`;

Global.H3 = styled.h3`
   margin-bottom: ${(props) => props.margin || 0};

   font-weight: 600;
   font-size: 28px;
   line-height: 36px;

   text-align: center;
   letter-spacing: -0.02em;

   color: ${(props) =>
      props.color ? colors(props.color) : "var(--color-cyan-blue)"};
`;

Global.H4 = styled.h4`
   margin-bottom: ${(props) => props.margin || 0};

   font-weight: ${(props) => props.fw || 400};
   font-size: 16px;
   line-height: 24px;

   text-transform: capitalize;

   color: ${(props) =>
      props.color ? colors(props.color) : "var(--color-cyan-blue)"};
`;

Global.H5 = styled.h5`
   margin-bottom: ${(props) => props.margin || 0};

   font-weight: 400;
   font-size: 14px;
   line-height: 20px;

   color: var(--color-gray);
`;

Global.CircleIcon = styled.button`
   width: 35px;
   height: 35px;

   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 50%;

   background: var(--color-closely-white);

   transition: transform 0.3s ease, background 0.3s ease, color .3s ease;

   &:hover {
      transform: scale(1.04);
      background: ${(props) =>
         props.bg === "red" ? "var(--color-red)" : "var(--color-blue)"};
      i::before{
         color: var(--color-white);
      }
   }
   &:active {
      transform: scale(1);
   }

   i {
      font-size: 12px;
   }
`;

Global.OldPrice = styled.h5`
   margin-bottom: ${(props) => props.margin || 0};

   font-weight: 400;
   font-size: 12px;
   line-height: 20px;

   text-decoration-line: line-through;

   color: var(--color-gray);
`;

Global.Price = styled.h4`
   margin-bottom: ${(props) => props.margin || 0};

   font-weight: 600;
   font-size: ${(props) => props.fz || "16px"};
   line-height: 24px;

   letter-spacing: -0.02em;

   color: var(--color-cyan-blue);
`;
