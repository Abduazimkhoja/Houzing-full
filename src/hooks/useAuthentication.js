import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const UseAuthentication = (data) => {
   const navigate = useNavigate();

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

export default UseAuthentication;
