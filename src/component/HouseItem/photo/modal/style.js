import { Modal } from "antd";
import styled from "styled-components";

export const ImageModal = styled(Modal)`
   & .modal__wrap {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
   }

   & .image {
      width: 100%;
   }
`;
