import React from "react";
import { Tabs } from "antd";
import { Wrapper } from "./style";

import SignIn from "./Singin";
import SignUp from "./SignUp";

const Registration = () => {
   return (
      <Wrapper>
         <Tabs
            defaultActiveKey="1"
            items={[
               { label: "Sign in", key: "1", children: <SignIn /> },
               { label: "Sign up", key: "2", children: <SignUp /> },
            ]}
         />
      </Wrapper>
   );
};

export default Registration;
