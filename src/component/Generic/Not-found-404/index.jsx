import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { Global } from "../../../root/style";

export const NotFound = () => {
   const navigate = useNavigate();

   return (
      <Global.Flex>
         <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
               <Button onClick={() => navigate("/home")} type="primary">
                  Back Home
               </Button>
            }
         />
      </Global.Flex>
   );
};
