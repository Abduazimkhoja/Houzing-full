import { ImageModal } from "./style";

export const Modal = ({ close, imgList, status }) => {
   if (!imgList) return "";
   return (
      <ImageModal
         open={status}
         onOk={close}
         onCancel={close}
         width="90%"
         title="Images"
      >
         <div className="modal__wrap">
            {imgList.map(({ imgPath }, index) => {
               return (
                  <img className="image" key={index} src={imgPath} alt="" />
               );
            })}
         </div>
      </ImageModal>
   );
};
