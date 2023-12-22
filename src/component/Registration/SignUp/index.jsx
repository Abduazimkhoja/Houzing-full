import React, { useRef } from "react";
import useRequest from "../../../hooks/useRequest";
import { message } from "antd";
import { Global } from "../../../root/style";
import { FormInput, Wrapper } from "./style";
import { Button } from "../../Generic";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   const body = useRef({});
   const { data, fetchData } = useRequest();
   const navigate = useNavigate();

   const onSubmit = async () => {
      await fetchData({
         method: "POST",
         url: "/auth/register",
         urlType: "public",
         body: body.current,
      });

      if (!data?.success) {
         message.success("Success")
         navigate("/registration");
      } else {
         message.error("invalid username or password")
      }
   };

   return (
      <Wrapper>
         <Wrapper.Content>
            <Global.H4 fz="18px" fw="600" margin="20px">
               Sign up
            </Global.H4>
            <div>
               <FormInput
                  ref={(el) => {
                     body.current.email = el?.input?.value;
                  }}
                  type="email"
                  placeholder="Login"
               />
               <FormInput
                  ref={(el) => {
                     body.current.firstname = el?.input?.value;
                  }}
                  type="text"
                  placeholder="First name"
               />
               <FormInput
                  ref={(el) => {
                     body.current.lastname = el?.input?.value;
                  }}
                  type="text"
                  placeholder="Last name"
               />
               <FormInput.Password
                  ref={(el) => {
                     body.current.password = el?.input?.value;
                  }}
                  type="password"
                  placeholder="Password"
               />
            </div>
            <Button onClick={onSubmit} width="100%">
               Login
            </Button>
         </Wrapper.Content>
      </Wrapper>
   );
};

export default SignUp;
