import React, { useState } from "react";
import { Button, Input } from "../../Generic";
import { ImageBlock, Images } from "./style";
import { Global } from "../../../root/style";
import { message } from "antd";

const Media = (formik) => {
   const { attachments } = formik.values;

   const [imageUrl, serImageUrl] = useState("");

   const onAdd = () => {
      if (imageUrl.includes("http")) {
         formik.setFieldValue("attachments", [
            ...attachments,
            { imgPath: imageUrl },
         ]);
         message.success("Image added");
         serImageUrl("");
      } else {
         message.error("This is not a valid image URL");
      }
   };

   console.log(imageUrl);

   const onDeleteImage = (index) => {
      formik.setFieldValue(
         "attachments",
         attachments.filter((_, i) => i !== index)
      );
      message.success("Image deleted");
   };

   return (
      <div>
         <Global.FlexRowCenter gap="20px" fw="true" margin="20px">
            <Input
               width="100%"
               type="text"
               value={imageUrl}
               onChange={({ target: { value } }) => serImageUrl(value)}
               placeholder="Set image URL (http://example.jpg)"
            />
            <Button type="button" onClick={onAdd}>
               Add image
            </Button>
         </Global.FlexRowCenter>
         <Global.FlexRowCenter gap="20px">
            {attachments.map((url, index) => (
               <ImageBlock
                  key={url.imgPath + index}
                  onClick={() => onDeleteImage(index)}
                  className="image__block"
               >
                  <Images title={url.imgPath} src={url.imgPath} alt="image" />
                  <i title={url.imgPath} className="icon-trash"></i>
               </ImageBlock>
            ))}
         </Global.FlexRowCenter>
      </div>
   );
};

export default Media;
