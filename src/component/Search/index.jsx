import React, { useState } from "react";
import { Button, Input } from "../Generic";
import { Global } from "../../root/style";
import { SearchWrap } from "./style";
import { Dropdown } from "antd";
import { SearchFilter } from "./filter";

export const Search = () => {
   const [DropdownStatus, setDropdownStatus] = useState(false);

   return (
      <Global.FullBg bg="white">
         <Global.Container>
            <SearchWrap>
               <Input
                  width="100%"
                  type="search"
                  icon="icon-search"
                  placeholder="Enter an address, neighborhood, city, or ZIP code"
               />
               <Dropdown
                  open={DropdownStatus}
                  onOpenChange={(DropdownStatus) => {
                     setDropdownStatus(DropdownStatus);
                  }}
                  trigger={["click"]}
                  dropdownRender={() => (
                     <SearchFilter setDropdownStatus={setDropdownStatus} />
                  )}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
               >
                  <Button type="whiteSmoke" bg="white">
                     <i className="icon-filter"></i> Advanced
                  </Button>
               </Dropdown>
               <Button width="180px">
                  <i className="icon-loupe"></i> Search
               </Button>
            </SearchWrap>
         </Global.Container>
      </Global.FullBg>
   );
};

export default Search;
