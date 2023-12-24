import React from "react";
import { Nav } from "./style";
import { navbar } from "../../utils/navbar";
import { Global, Main } from "../../root/style";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "./login";
import Foot from "../Footer";

const Navbar = () => {
   const navigate = useNavigate();
   return (
      <>
         <Global.FullBg bg="cyanBlue">
            <Global.Container>
               <nav>
                  <Nav.List>
                     <Nav.Item>
                        <Global.Logo onClick={() => navigate("/home")} />
                     </Nav.Item>
                     <Nav.Item>
                        {navbar.map(({ id, path, title, hidden }) => {
                           return (
                              !hidden && (
                                 <Nav.Link key={id()} to={path}>
                                    {title}
                                 </Nav.Link>
                              )
                           );
                        })}
                     </Nav.Item>
                     <Nav.Item>
                        <Login />
                     </Nav.Item>
                  </Nav.List>
               </nav>
            </Global.Container>
         </Global.FullBg>
			
			<Main>
            <Outlet />
         </Main>
         <Foot />
      </>
   );
};
export default Navbar;
