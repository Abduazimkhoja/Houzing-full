import React, { useRef, useState } from "react";
import { Filter } from "./style";
import { Global } from "../../../root/styled";
import Input from "../../Generic/input";
import { FilterData } from "../../../utils/Filter";
import { Button } from "../../Generic";

export const SearchFilter = ({ setDropdownStatus }) => {
   let [refPick, serRefPick] = useState({})
   const allRef = useRef({})
   console.log(refPick);
   return (
      <Filter>
         {FilterData.map(({ id, subtitle, inputs }) => (
            <Filter.Block key={id}>
               <Global.H4 fw={600}>{subtitle}</Global.H4>
               <Filter.Inputs >
                  {inputs.map(({ id, type, placeholder, ref: refInput}) => (
                     <Input key={id} onClick = {() => serRefPick(allRef.current[refInput])} ref = {el => {allRef.current[refInput] = el}} type={type} placeholder={placeholder} />
                  ))}
               </Filter.Inputs>
            </Filter.Block> 
         ))}
         <Filter.Footer> 
            <Button onClick={() => setDropdownStatus(false)} type="cyanBlue">
               Cancel
            </Button>
            <Button onClick={() => setDropdownStatus(false)}>Submit</Button>
         </Filter.Footer>
      </Filter>
   );
};
export default SearchFilter