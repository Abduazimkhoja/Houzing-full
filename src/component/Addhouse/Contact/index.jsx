import { useData } from "../../../hooks/useData";
import { Select, Textarea } from "./style";
import { Global } from "../../../root/style";
import { Input } from "../../Generic";

const Contact = ({ change, formikValue }) => {
   const [data] = useData("/categories/list");

   return (
      <Global.Flex gap="20px">
         <Global.FlexRowCenter width="100%" fw="true" gap="20px">
            <Input
               width="100%"
               type="text"
               name="name"
               value={formikValue}
               onChange={change}
               placeholder="Property title*"
            />

            <Select name="category" onChange={change}>
               {data.map(({ id, name }) => (
                  <option key={id} value={id}>
                     {name}
                  </option>
               ))}
            </Select>
         </Global.FlexRowCenter>

         <Textarea
            name="description"
            onChange={change}
            placeholder="Description*"
            cols="10"
            rows="6"
         />
      </Global.Flex>
   );
};

export default Contact;
