import styled from "styled-components";

export const Wrapper = styled.section`
   width: 100%;

   display: grid;
   grid-auto-flow: row;
   grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
   gap: 40px 20px;
`