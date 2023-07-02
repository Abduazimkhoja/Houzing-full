import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import ProductPhoto from "./photo";
import ProductInfo from "./info";
import { Global } from "../../root/style";
import { Wrapper } from "./style";
import UploaderUser from "./user";
import Description from "./description";
import ProductDocuments from "./documents";

const HouseItem = () => {
   const { data, fetchData } = useRequest();
   const params = useParams();

   useEffect(() => {
      fetchData({
         url: `/houses/id/${params.id}`,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Global.Container>
         <ProductPhoto />
         <Wrapper>
            <Wrapper.Content>
               <ProductInfo data={data} />
               <Description description={data?.data?.description} />
               <ProductDocuments />
               <Wrapper.Line />
            </Wrapper.Content>
            <UploaderUser user={data?.data?.user} />
         </Wrapper>
      </Global.Container>
   );
};

export default HouseItem;
