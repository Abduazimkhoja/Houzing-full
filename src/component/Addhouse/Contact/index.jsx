import { useData } from "../../../hooks/useData";
import { Select, Textarea } from "./style";
import { Global } from "../../../root/style";
import { Input } from "../../Generic";

const Contact = (formik) => {
   const { name, categoryId, description, category } = formik.values;
   const [data] = useData("/categories/list");
   const defaultCategory = [...data].find(
      (item) => item.name === category?.name
   );

   return (
      <Global.Flex gap="20px">
         <Global.FlexRowCenter width="100%" fw="true" gap="20px">
            <Input
               width="100%"
               type="text"
               name="name"
               value={name}
               onChange={formik.handleChange}
               placeholder="Property title*"
            />

            <Select
               name="categoryId"
               onChange={formik.handleChange}
               value={categoryId || defaultCategory?.id}
            >
               {data.map(({ id, name }) => (
                  <option key={+id} label={name} value={+id}></option>
               ))}
            </Select>
         </Global.FlexRowCenter>

         <Textarea
            name="description"
            onChange={formik.handleChange}
            value={description}
            placeholder="Description*"
            cols="10"
            rows="6"
         />
      </Global.Flex>
   );
};

export default Contact;
