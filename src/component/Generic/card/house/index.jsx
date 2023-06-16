import React from "react";
import { Card } from "./style";
import { Global } from "../../../../root/style";
import Details from "../../house-details";

const HouseCard = () => {
   return (
      <Card>
         <Card.Head>
            <Card.TopInfo  bg="blue" left="true">
               FEATURED
            </Card.TopInfo>
            <Card.TopInfo>FOR SALE</Card.TopInfo>
            <Card.UserPhoto src="https://snipp.ru/demo/560/image.jpeg" />
            <Card.Image
               src="https://snipp.ru/demo/560/image.jpeg"
               alt="Photo none"
            />
         </Card.Head>
         <Card.Content>
            <Global.H4 margin="4px" fw="600">
               New Apartment Nice Wiew
            </Global.H4>
            <Global.H5 margin = "16px">Quincy St, Brooklyn, NY, USA</Global.H5>
            <Details color="gray"/>
         </Card.Content>
         <Card.Footer>
            <div>
               <Global.OldPrice>$2,800/mo</Global.OldPrice>
               <Global.Price>$7,500/mo</Global.Price>
            </div>
            <div className="card__buttons">
               <i className="card__resize icon-resize"></i>
               <Global.CircleIcon bg="red"><i className="icon-love"></i></Global.CircleIcon>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default HouseCard;
