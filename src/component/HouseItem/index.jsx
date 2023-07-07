import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import ProductPhoto from "./photo";
import ProductInfo from "./info";
import { Global } from "../../root/style";
import { Wrapper } from "./style";
import UploaderUser from "./user";
import Description from "./description";
import ProductDocuments from "./Documents";
import ProductLocation from "./location";

const HouseItem = () => {
   const { data, fetchData } = useRequest();
   const params = useParams();

   useEffect(() => {
      fetchData({
         url: `/houses/id/${params.id}`,
      });

      window.scrollTo(0, 0);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params]);

   const location = {
      address: data?.data?.address,
      city: data?.data?.city,
      region: data?.data?.region,
      zipCode: data?.data?.zipCode,
      country: data?.data?.country,
   };

   return (
      <Global.Container>
         <ProductPhoto />
         <Wrapper>
            <Wrapper.Content>
               <ProductInfo data={data} />
               <Description description={data?.data?.description} />
               <ProductDocuments />
               <Wrapper.Line />
               <ProductLocation data={location} />
               <Wrapper.Line />
            </Wrapper.Content>
            <UploaderUser user={data?.data?.user} />
         </Wrapper>
      </Global.Container>
   );
};

export default HouseItem;
