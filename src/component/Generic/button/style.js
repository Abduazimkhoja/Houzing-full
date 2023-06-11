import { css, styled } from "styled-components";
import colors from "../color";

const colorType = (props) => {
   return {
      entirelyBlue: css`
         background: ${colors("blue")};
         border: 1px solid ${colors("blue")};
      `,
      cyanBlue: css`
         color: ${colors("cyanBlue")};
         border: 1px solid ${colors("cyanBlue")};
      `,
      white: css`
         border: 1px solid ${colors("white")};
      `,
      outletBlue: css`
         color: ${colors("blue")};
         border: 1px solid ${colors("blue")};
      `,
      whiteLilac: css`
         color: ${colors("cyanBlue")};
         border: 1px solid ${colors("whiteLilac")};
      `,
   }[props.type || "entirelyBlue"];
};

const DefaultStyle = css`
   width: ${(props) => props.width || "130px"};
   height: ${(props) => props.height || "44px"};

   padding: 0 16px;

   font-weight: 400;
   font-size: ${(props) => props.fontSize || "14px"};
   line-height: 20px;

   border-radius: 2px;

   color: ${colors("white")};
   background: none;

   transition: transform 0.2s ease, border-width 0.2s ease;
   

   &:hover {
      transform: scale(1.05);
      border-width: 2px;
   }

   &:active {
      transform: scale(1);
      border-width: 1px;
   }
`;

export const Button = styled.button`
   ${DefaultStyle}
   ${colorType}
`;
