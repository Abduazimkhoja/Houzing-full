import React, { useState } from "react";
import { Button, Input } from "../Generic";
import { Global } from "../../root/styled";
import { Outlet } from "react-router-dom";
import { SearchWrap } from "./style";
import { Dropdown } from "antd";
import { SearchFilter } from "./filter";

export const Search = () => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Global.FillBg bg="white">
            <Global.Container>
               <SearchWrap>
                  <Input
                     width="100%"
                     type="search"
                     icon="icon-search"
                     placeholder="Enter an address, neighborhood, city, or ZIP code"
                  />
                  <Dropdown
                     open={open}
                     onOpenChange={(open) => {
                        setOpen(open);
                     }}
                     trigger={["click"]}
                     dropdownRender={() => <SearchFilter setOpen={setOpen} />}
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
         </Global.FillBg>
         <Outlet />
      </>
   );
};
