import React from "react";
import { Nav } from "./style";
import { navbar } from "../../utils/navbar";
import { Global } from "../../root/styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const navigate = useNavigate();
   return (
      <Global.fullBG bg="cyan-blue">
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
                     <button>login</button>
                  </Nav.item>
               </Nav.list>
            </nav>
         </Global.container>
      </Global.fullBG>
   );
};
export default Navbar;
