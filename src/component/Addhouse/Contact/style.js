import AntTextarea from "antd/es/input/TextArea";
import { css, styled } from "styled-components";

const inputStyle = css`
   color: var(--color-cyan-blue);

   border-radius: 1px;
   border: 1px solid var(--color-white-smoke);
   background: ${(props) => props.bg || "var(--color-white)"};

   transition: border-color 0.3s ease;

   &::placeholder {
      font-size: 14px;
      color: var(--color-cyan-blue);
   }

   &:focus-within,
   &:hover {
      border-color: var(--color-blue);
   }
`;

export const Select = styled.select`
   width: ${(props) => props.width || "200px"};
   height: ${(props) => props.height || "44px"};

   padding: 0 8px;
	cursor: pointer;

   ${inputStyle}
`;

export const Textarea = styled(AntTextarea)`
   ${inputStyle}
   max-height: 250px;
	padding: 10px 8px;
   &:focus {
      box-shadow: none;
   }
	&::placeholder {
		opacity: .4;
	}
`;
