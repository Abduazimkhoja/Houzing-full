import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductPhoto from "./photo";
import ProductInfo from "./info";
import { Global } from "../../root/style";
import { Wrapper } from "./style";
import UploaderUser from "./user";
import Description from "./description";
// import ProductDocuments from "./Documents";
import ProductLocation from "./location";
import ProductProperty from "./property";
import ProductFeatures from "./features";
import ProductComment from "./comment";
import { Spin } from "antd";
import { useData } from "../../hooks/useData";
import { Modal } from "./photo/modal";

const HouseItem = () => {
   const [modalStatus, setModalStatus] = useState(false);

   const params = useParams();
   const [data, loading] = useData(`/houses/id/${params.id}`);

   if (loading || !!data.length) return <Spin />;

   const { attachments, description, user } = { ...data };

   const dialogImageList = attachments.slice(5) || 0;

   const showModal = () => {
      setModalStatus(true);
   };

   const closeModal = () => {
      setModalStatus(false);
   };

   return (
      <Global.Container>
         <Modal
            close={closeModal}
            imgList={dialogImageList}
            status={modalStatus}
         />
         <ProductPhoto
            modalLength={dialogImageList.length}
            showModal={showModal}
            attachments={attachments}
         />
         <Wrapper>
            <Wrapper.Content>
               <ProductInfo data={data} />
               <Description description={description} />
               {/* <ProductDocuments /> */}
               <Wrapper.Line />
               <ProductLocation data={data} />
               <Wrapper.Line />
               <ProductProperty data={data} />
               <Wrapper.Line />
               <ProductFeatures />
               <Wrapper.Line />
               <ProductComment />
            </Wrapper.Content>
            <UploaderUser user={user} />
         </Wrapper>
      </Global.Container>
   );
};

export default HouseItem;
