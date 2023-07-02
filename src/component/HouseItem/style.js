import { styled } from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 20px;
`;

Wrapper.Content = styled.div`
   flex: 1;
`;

Wrapper.Line = styled.hr`
   margin: 48px 0;
   height: 1px;
   background: var(--color-white-smoke);
`;