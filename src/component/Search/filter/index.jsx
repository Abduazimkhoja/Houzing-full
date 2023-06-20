import React, { useRef } from "react";
import { Filter } from "./style";
import { Global } from "../../../root/style";
import Input from "../../Generic/input";
import { FilterData } from "../../../utils/Filter";
import { Button } from "../../Generic";
import usedReplace from "../../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";

export const SearchFilter = ({ setDropdownStatus }) => {
   const navigate = useNavigate();
   const location = useLocation();
   const query = useSearch();

   // let [refPick, serRefPick] = useState({});
   const allRef = useRef({});
   // console.log(refPick);

   const onChange = ({ target: { name, value } }) => {
      console.log(name, value);
      navigate(`${location.pathname}${usedReplace(name, value)}`);
   };

   return (
      <Filter>
         {FilterData.map(({ id, subtitle, inputs }) => (
            <Filter.Block key={id}>
               <Global.H4 fw={600}>{subtitle}</Global.H4>
               <Filter.Inputs>
                  {inputs.map(
                     ({ id, type, placeholder, ref: refInput, name }) => (
                        <Input
                           key={id}
                           // onClick={() =>
                           //    serRefPick(
                           //       allRef.current[refInput].children[0].value
                           //    )
                           // }
                           ref={(el) => {
                              allRef.current[refInput] = el;
                           }}

                           defaultValue = {query.get(name)}
                           name={name}
                           onChange={onChange}
                           type={type}
                           placeholder={placeholder}
                        />
                     )
                  )}
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
export default SearchFilter;
