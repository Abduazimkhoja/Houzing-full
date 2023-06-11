import React from "react";
import { Nav } from "./style";
import { navbar } from "../../utils/navbar";
import { Global } from "../../root/styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generic/button/style";


const Navbar = () => {
   const navigate = useNavigate();
   return (
      <Global.fullBG bg="cyanBlue">
         <Global.container>
            <nav>
               <Nav.list>
                  <Nav.item>
                     <Global.logo onClick={() => navigate("/home")} />
                  </Nav.item>
                  <Nav.item>
                     {navbar.map(({ id, path, title }) => {
                        return (
                           <Nav.link key={id()} to={path}>
                              {title}
                           </Nav.link>
                        );
                     })}
                  </Nav.item>
                  <Nav.item>
                     <Button type="white" onClick={() => navigate("/login")}>login</Button>
                  </Nav.item>
               </Nav.list>
            </nav>
         </Global.container>
      </Global.fullBG>
   );
};
export default Navbar;
