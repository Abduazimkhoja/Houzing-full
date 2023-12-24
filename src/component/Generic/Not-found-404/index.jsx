import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { Global } from "../../../root/style";

export const NotFound = () => {
   const navigate = useNavigate();

   return (
      <Global.Flex>
         <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
               <Button onClick={() => navigate("/home")} type="primary">
                  Back Home
               </Button>
            }
         />
      </Global.Flex>
   );
};
