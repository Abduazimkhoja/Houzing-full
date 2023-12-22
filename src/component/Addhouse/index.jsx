import { useFormik } from "formik";
import { createElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import useSearch from "../../hooks/useSearch";
import { Global } from "../../root/style";
import { houseFormData } from "../../utils/addHouse";
import { Button } from "../Generic";
import Contact from "./Contact";
import Media from "./Media";
import { AddHouseStyle } from "./style";
import { RenderInputs } from "./RenderInput";
import { Spin, message } from "antd";

const AddHouse = () => {
   const { fetchData } = useRequest();

   const initialValues = {
      address: "",
      attachments: [],
      categoryId: 0,
      city: "",
      country: "",
      description: "",
      houseDetails: {
         area: "",
         bath: "",
         beds: "",
         garage: "",
         room: "",
         yearBuilt: "",
      },

      name: "",
      price: "",
      region: "",
      salePrice: "",
      zipCode: "",

      status: true,
      locations: {
         latitude: 0,
         longitude: 0,
      },
      componentsDto: {},
      homeAmenitiesDto: {},
   };

   const navigate = useNavigate();
   const query = useSearch();
   const id = query.get("id");

   // formik rendering ---
   const formik = useFormik({
      initialValues,
      enableReinitialize: true,

      onSubmit: (values) => {
         const request = {
            url: id ? `/houses/${id}` : "/houses",
            method: id ? "PUT" : "POST",
            authorize: true,
            body: values,
         };
         id ? message.success("House updated") : message.success("House added");

         fetchData(request).then(
            (res) => res.success && navigate("/myproperties")
         );
      },
   });

   useEffect(() => {
      if (id) {
         fetchData({ url: `/houses/id/${id}`, authorize: true }).then((res) => {
            formik.setValues(res?.data);
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // Block Elements ---
   const renderingBlockElements = ({ parentObjectName, inputs, component }) => {
      if (component) {
         return createElement({ Contact, Media }[component], formik);
      }

      const attr = {
         onChange: formik.handleChange,
         maxwidth: "15%",
         width: "100%",
         parentObjectName,
         inputs,
         formikValue: formik.values,
      };

      return (
         <Global.FlexRowCenter gap="20px">
            {RenderInputs(attr)}
         </Global.FlexRowCenter>
      );
   };

   // Content Block ---
   const renderingContentBlock = () => {
      return houseFormData.map(({ id, title, ...rest }) => {
         return (
            <AddHouseStyle.Block key={id}>
               <Global.H4 fz="18px" fw="600" margin="36px">
                  {title}
               </Global.H4>
               {renderingBlockElements(rest)}
            </AddHouseStyle.Block>
         );
      });
   };

   // Render Add house
   return id && !formik?.values?.id ? (
      <Spin
         size="large"
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
         }}
      />
   ) : (
      <Global.Wrapper margin="30px 0 100px">
         <Global.Container>
            <form onSubmit={formik.handleSubmit}>
               <Global.H3 margin="26px">Add new property</Global.H3>
               {renderingContentBlock()}
               <Global.Flex jc="right" fxd="row">
                  <Button type="submit" width="280px">
                     Save
                  </Button>
               </Global.Flex>
            </form>
         </Global.Container>
      </Global.Wrapper>
   );
};

export default AddHouse;
