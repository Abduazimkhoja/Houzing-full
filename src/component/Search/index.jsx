import React from "react";
import { Button, Input } from "../Generic";
import { Global } from "../../root/styled";
import { Outlet } from "react-router-dom";
import { SearchWrap } from "./style";
import { Dropdown } from "antd";

export const Search = () => {
   return (
      <>
         <Global.container>
            <SearchWrap>
               <Input
                  width="100%"
                  type="search"
                  icon="icon-search"
                  placeholder="Enter an address, neighborhood, city, or ZIP code"
               />
               <Dropdown
                  overlay={<h1>test</h1>}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
               >
                  <Button type="whiteSmoke">
                     <i className="icon-filter"></i> Advanced
                  </Button>
               </Dropdown>
               <Button width="180px">
                  <i className="icon-loupe"></i> Search
               </Button>
            </SearchWrap>
         </Global.container>

         <Outlet />
      </>
   );
};
