import React, { useState } from "react";
import { Filter } from "./style";
import { Global } from "../../../root/styled";
import Input from "../../Generic/input";
import { FilterData } from "../../../utils/Filter";
import { Button } from "../../Generic";

export const SearchFilter = ({setOpen}) => {
   const [refPick, setRefPick] = useState('')
   return (
      <Filter>
         {FilterData.map(({ id, subtitle, inputs }) => (
            <Filter.Block key={id}>
               <Global.H4 fw={600}>{subtitle}</Global.H4>
               <Filter.Inputs>
                  {inputs.map(({ id, type, placeholder, ref}) => (
                     <Input onClick = {setRefPick(ref)} key={id} type={type} placeholder={placeholder} />
                  ))}
               </Filter.Inputs>
            </Filter.Block>
         ))}
         <Filter.Footer>
            <Button onClick={() => setOpen(false)} type="cyanBlue">Cancel</Button>
            <Button  onClick={() => setOpen(false)}>Submit</Button>
         </Filter.Footer>
      </Filter>
   );
};
