import { Input } from "antd";
import { css, styled } from "styled-components";

export const Wrapper = styled.section`
   margin: 64px 0;

   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1 1 auto;
`;

Wrapper.Content = styled.div`
   max-width: 580px;
   width: 100%;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   padding: 24px 30px 48px;

   border-radius: 3px;
   border: 1px solid var(--color-white-smok, #e6e9ec);

   background: var(--color-white, #fff);

   box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);

   .ant-input-affix-wrapper-focused {
      box-shadow: none;
   }
`;

const inputStyle = css`
   margin-bottom: 40px;
   width: 100%;
   height: 28px;
   border: none;
   border-bottom: 1px solid #000;
   padding: 0;
   border-radius: 0;
`;

export const FormInput = styled(Input)`
   ${inputStyle}
   &:focus {
      box-shadow: none;
   }
`;

FormInput.Password = styled(Input.Password)`
   ${inputStyle}
`;
