import React from "react";
import { ImageBox } from "./style";
import { Spin } from "antd";

const ProductPhoto = ({ modalLength, showModal, attachments }) => {
   if (!attachments)
      return (
         <ImageBox>
            <Spin size="large" />
         </ImageBox>
      );

   const firstImage = attachments[0].imgPath;
   const imageList = attachments.slice(1, 5);
   return (
      <ImageBox>
         <img src={firstImage} alt="" className="image-first" />
         <div className="child-box">
            {imageList.map(({ imgPath }, index) => {
               return index === 3 && attachments.length > 5 ? (
                  <div className="image-other">
                     <img
                        
                        className="image"
                        key={index}
                        src={imgPath}
                        alt=""
                     />
                     <div onClick={showModal}>+{modalLength}</div>
                  </div>
               ) : (
                  <img className="image" key={index} src={imgPath} alt="" />
               );
            })}
         </div>
      </ImageBox>
   );
};

export default ProductPhoto;
