import { styled } from "styled-components";

export const Progress = styled.progress`
   width: 150px;
   height: 5px;
   &[value] {
      &::-webkit-progress-bar {
         background: #e6e9ec;
         border-radius: 5px;
      }

      &::-webkit-progress-value {
         background: #0061df;
         border-radius: 5px;
      }
   }
`;