import React, { useRef } from "react";
import useRequest from "../../../hooks/useRequest";
import { message } from "antd";
import { Global } from "../../../root/style";
import { FormInput, Wrapper } from "./style";
import { Button } from "../../Generic";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
   const body = useRef({});
   const { data, fetchData } = useRequest();
   const navigate = useNavigate();

   const onSubmit = async () => {
      await fetchData({
         method: "POST",
         url: "/auth/login",
         urlType: "public",
         body: body.current,
      });

      if (data?.authenticationToken) {
         localStorage.setItem("token", `${data?.authenticationToken}`);

         (() => {
            message.open({
               type: "success",
               content: "Successfully",
            });
         })("success");
         navigate("/home");
      } else {
         (() => {
            message.open({
               type: "error",
               content: "invalid username or password",
            });
         })("error");
      }
   };

   return (
      <Wrapper>
         <Wrapper.Content>
            <Global.H4 fz="18px" fw="600" margin="20px">
               Sign in
            </Global.H4>
            <div>
               <FormInput
                  ref={(el) => {
                     body.current.email = el?.input?.value;
                  }}
                  type="text"
                  placeholder="Login"
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

export default SignIn;
