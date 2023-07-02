import { styled } from "styled-components";

export const Wrapper = styled.div`
   width: 280px;
   height: fit-content;

   padding: 24px;

   background: var(--color-white);

   border-radius: 3px;
   border: 1px solid var(--color-white-smoke);
`;

Wrapper.Photo = styled.div`
   width: 56px;
   height: 56px;

   border: 2px solid var(--color-white);

   background: center/cover no-repeat url(""), #000;

   border-radius: 50%;
   box-shadow: 0px 0px 10px 0px rgba(13, 38, 59, 0.2);
`;
