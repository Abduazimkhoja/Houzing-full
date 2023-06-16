import React from "react";
import { Nav } from "./style";
import { navbar } from "../../utils/navbar";
import { Global } from "../../root/style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";

const Navbar = () => {
   const navigate = useNavigate();
   return (
      <>
         <Global.FillBg bg="cyanBlue">
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
                        <Button
                        width="120px"
                           type="white"
                           onClick={() => navigate("/signin")}
                        >
                           login
                        </Button>
                     </Nav.Item>
                  </Nav.List>
               </nav>
            </Global.Container>
         </Global.FillBg>
      </>
   );
};
export default Navbar;
