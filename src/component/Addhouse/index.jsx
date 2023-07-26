import React, { createElement } from "react";
import { Global } from "../../root/style";
import { Button, Input } from "../Generic";
import Contact from "./Contact";
import Media from "./Media";
import { addHouseData } from "../../utils/addHouse";
import { AddHouseStyle } from "./style";
import { Checkbox } from "antd";
import { useFormik } from "formik";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

const AddHouse = () => {
   const { data, fetchData } = useRequest();
   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         houseDetails: {},
         homeAmenitiesDto: {},
         componentsDto: {},
         caegory: 1,
         location: {
            latitude: 0,
            longitude: 0,
         },
      },
      onSubmit: async (values) => {
         const request = {
            url: "/houses",
            method: "POST",
            authorize: true,
            body: values,
         };

         fetchData(request);
      },
   });

   data?.success && navigate("/myproperties");

   return (
      <Global.Wrapper margin="30px 0 100px">
         <Global.Container>
            <form onSubmit={formik.handleSubmit}>
               <Global.H3 margin="26px">Add new property</Global.H3>
               {addHouseData.map(
                  ({ id, title, inputs, component, parentObjectName }) => {
                     return (
                        <AddHouseStyle.Block key={id}>
                           <Global.H4 fz="18px" fw="600" margin="36px">
                              {title}
                           </Global.H4>
                           {component ? (
                              createElement({ Contact, Media }[component], {
                                 change: formik.handleChange,
                                 formikValue: formik.values,
                              })
                           ) : (
                              <Global.FlexRowCenter gap="20px">
                                 {inputs.map((inputAtribute) => {
                                    return createElement(
                                       inputAtribute?.type === "checkbox"
                                          ? Checkbox
                                          : Input,
                                       {
                                          key: inputAtribute?.id,
                                          ...inputAtribute,
                                          title: inputAtribute?.placeholder,

                                          checked:
                                             formik.values[inputAtribute?.name],
                                          value: formik.values[
                                             inputAtribute?.name
                                          ],
                                          onChange: formik.handleChange,

                                          maxwidth: "15%",
                                          width: "100%",
                                       },
                                       inputAtribute?.type !== "checkbox"
                                          ? null
                                          : inputAtribute?.placeholder
                                    );
                                 })}
                              </Global.FlexRowCenter>
                           )}
                        </AddHouseStyle.Block>
                     );
                  }
               )}
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
