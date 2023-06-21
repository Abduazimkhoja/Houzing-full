import { styled } from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   min-width: 250px;
   max-width: 300px;
   height: 350px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
      url(${(props) => props.bg || ""});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;

   .icon {
      margin: 52px 0 24px;
      font-size: 60px;
      color: var(--color-white);
   }

   h4 {
      margin: 0;

      font-weight: 600;
      font-size: 18px;
      line-height: 28px;

      text-align: center;
      text-transform: capitalize;
      color: inherit;
      color: var(--color-white);
   }
`;
