import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav``;

Nav.List = styled.ul`
   height: 64px;

   margin: 0;

   display: flex;
   align-items: center;
   justify-content: space-between;

   gap: 64px;
`;

Nav.Item = styled.li`
   display: flex;
   gap: 64px;
`;

Nav.Link = styled(NavLink)`
   position: relative;

   font-weight: 400;
   font-size: 16px;
   line-height: 24px;

   color: var(--color-white);
   text-transform: capitalize;


   &::after {
      content: "";
      width: 0%;
      height: 1px;

      position: absolute;
      bottom: -3px;
      left: 0;

      display: block;
      background: var(--color-white);
      transition: width 0.3s ease;
   }
   &:hover,
   &.active {
      &::after {
         content: "";
         width: 100%;
         height: 2px;
         background: var(--color-white);
      }
   }
`;
