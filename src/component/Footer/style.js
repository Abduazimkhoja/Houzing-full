import styled from "styled-components";

// Footer
export const Footer = styled.footer`
   height: inherit;

   display: flex;
   flex-direction: column;

   .footer__title {
      margin-bottom: 12px;

      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
   }

   .footer__link {
      display: flex;
      align-items: center;
      gap: 20px;

      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      color: #ffffff;

      &:hover {
         opacity: 0.7;
      }

      i {
         font-size: 18px;
         color: #fff;
      }
   }
`;

// Footer top
Footer.Head = styled.div`
   padding-top: 48px;

   display: flex;
   justify-content: space-between;
   flex: 1;
`;

Footer.List = styled.ul`
   max-width: 300px;

   display: flex;
   flex-direction: column;
   gap: 20px;
`;

// Footer bottom
Footer.Bottom = styled.div`
   height: 64px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   border-top: 1px solid #ffffff20;

   .icon-logo {
      font-size: 36px;
   }

   .productBy {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin: 0;

      color: #ffffff;
   }
`;

// Social
export const Social = styled.ul`
   display: flex;
   gap: 14px;
   .social__link {
      width: 36px;
      height: 36px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 3px;
      &:hover {
         background: #ffffff10;
      }
      i {
         font-size: 12px;
      }
   }
`;
