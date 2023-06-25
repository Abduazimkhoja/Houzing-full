import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import { Filter } from "./style";

import { FilterData } from "../../../utils/Filter";

import { Input, Button } from "../../Generic";
import { Global } from "../../../root/style";

import { useData } from "../../../hooks/useData";
import usedReplace from "../../../hooks/useReplace";
import useSearch from "../../../hooks/useSearch";

export const SearchFilter = ({ setDropdownStatus }) => {
   // let [refPick, serRefPick] = useState({});
   const allRef = useRef({});
   // console.log(refPick);

   const [data] = useData("/categories/list");

   const navigate = useNavigate();
   const query = useSearch();

   const handleSelectChange = (category_id) => {
      navigate(
         `/properties${
            category_id !== "All"
               ? `/${usedReplace("category_id", category_id)}`
               : ""
         }`
      );
   };

   const onChange = ({ target: { name, value } }) => {
      navigate(`/properties/${usedReplace(name, value)}`);
   };

   return (
      <Filter>
         {FilterData.map(({ id, subtitle, inputs }) => (
            <Filter.Block key={id}>
               <Global.H4 fw={600}>{subtitle}</Global.H4>
               <Filter.Inputs>
                  {inputs.map(
                     ({ id, type, placeholder, ref: refInput, name }) =>
                        type !== "select" ? (
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
                              defaultValue={query.get(name)}
                              name={name}
                              onChange={onChange}
                              type={type}
                              placeholder={placeholder}
                           />
                        ) : (
                           <Select
                              key={id}
                              defaultValue={
                                 Number(query.get("category_id")) || "All"
                              }
                              style={{ width: 200, height: 44 }}
                              onChange={handleSelectChange}
                              options={[
                                 { value: "All", label: "All Category" },
                                 ...data.map((category) => {
                                    return {
                                       value: category.id,
                                       label: `${
                                          category.name[0].toUpperCase() +
                                          category.name.slice(1)
                                       }`,
                                    };
                                 }),
                              ]}
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
