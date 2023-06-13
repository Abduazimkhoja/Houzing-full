import React from "react";
import { Filter } from "./style";
import { Global } from "../../../root/styled";
import Input from "../../Generic/input";
import { FilterData } from "../../../utils/Filter";
import { Button } from "../../Generic";

export const SearchFilter = () => {
   
   return (
      <Filter>
         {FilterData.map(({ id, subtitle, inputs }) => (
            <Filter.block key={id}>
               <Global.H4 fw={600}>{subtitle}</Global.H4>
               <Filter.inputs>
                  {inputs.map(({ id, type, placeholder, ref}) => (
                     <Input key={id} type={type} placeholder={placeholder} />
                  ))}
               </Filter.inputs>
            </Filter.block>
         ))}
         <Filter.footer>
            <Button type="cyanBlue">Cancel</Button>
            <Button >Submit</Button>
         </Filter.footer>
      </Filter>
   );
};
