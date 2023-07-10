import React from "react";
import { Button } from "../../Generic";
import { Dropdown } from "antd";
import { useNavigate } from "react-router";
import { Global } from "../../../root/style";
import { DropdownRender } from "./style";

const Login = () => {
   const navigate = useNavigate();

   const onClickLogin = (event) => {
      const { name } = event.target.dataset;
      if (name === "logout") {
         localStorage.removeItem("token");
         navigate("/home");
      } else navigate(`/${name}`);
   };

   return (
      <>
         {localStorage.getItem("token") ? (
            <Dropdown
               trigger={["click"]}
               dropdownRender={() => (
                  <DropdownRender>
                     <button>
                        <Global.H5 data-name="profile" onClick={onClickLogin}>
                           My Profile
                        </Global.H5>
                     </button>
                     <button>
                        <Global.H5
                           data-name="myproperties"
                           onClick={onClickLogin}
                        >
                           My Properties
                        </Global.H5>
                     </button>
                     <button>
                        <Global.H5 data-name="favorites" onClick={onClickLogin}>
                           Favorites
                        </Global.H5>
                     </button>
                     <button>
                        <Global.H5 data-name="logout" onClick={onClickLogin}>
                           Log out
                        </Global.H5>
                     </button>
                  </DropdownRender>
               )}
               placement="bottomRight"
            >
               <button className="icon-login"></button>
            </Dropdown>
         ) : (
            <Button
               width="120px"
               type="white"
               onClick={() => navigate("/signin")}
            >
               login
            </Button>
         )}
      </>
   );
};

export default Login;
