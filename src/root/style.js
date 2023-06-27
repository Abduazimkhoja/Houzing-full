import { styled } from "styled-components";
import colors from "../component/Generic/color";

export const Global = styled.div``;

Global.FullBg = styled.section`
   background: ${(props) =>
      (props.url &&
         `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), center/cover no-repeat 
		url(${props.url})`) ||
      colors(props.bg)};
   padding: ${(props) => props.padding} 0;
   height: ${(props) => props.height || "auto"};

   ${(props) =>
      props.footer &&
      `
         width: 100%;
         position: absolute;
         left: 0;
         bottom: 0;
      `}
`;

Global.Container = styled.div`
   max-width: 1240px;
   width: 100%;
   height: inherit;

   display: block;
   position: relative;

   margin: 0 auto;
   padding: 0 30px;
`;

Global.FlexCenter = styled.div`
   width: inherit;
   height: inherit;

   display: flex;
   align-items: center;

   ${(props) => props.column && "flex-direction: column;"}
   justify-content: center;
`;

Global.Limiter = styled.div`
   width: ${(props) => props.width || 0};
`;

Global.Logo = styled.i.attrs((props) => ({
   className: "icon-logo",
}))`
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
   font-size: ${(props) => props.fz || "16px"};
   line-height: 24px;

   text-transform: capitalize;

   text-align: ${(props) => props.ta};

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
   width: 36px;
   height: 36px;

   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 50%;
   text-align: center;

   background: var(--color-closely-white);

   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

   &:hover {
      background: ${(props) =>
         props.bg === "red" ? "var(--color-red)" : "var(--color-blue)"};
      i::before {
         color: var(--color-white);
      }
   }

   i {
      display: flex;
      align-items: center;
      justify-content: center;
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
