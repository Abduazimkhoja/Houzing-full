import React, { useContext } from "react";
import { Card } from "./style";
import { Global } from "../../../../root/style";
import Details from "../../house-details";
import { useNavigate } from "react-router-dom";
import { PropertiesContext } from "../../../../context/Properties";

const HouseCard = ({ data = {} }) => {
   const [{refetch}] = useContext(PropertiesContext)


   const {
      id,
      address,
      attachments,
      city,
      country,
      description,
      region,
      houseDetails,
      price,
      salePrice,
      favorite = false,
   } = data;

   
   const navigate = useNavigate();
   const { REACT_APP_BASE_URL: url } = process.env;

   const favoriteChange = (event) => {
      event?.stopPropagation();
      fetch(`${url}/houses/addFavourite/${id}?favourite=${!favorite}`, {
         method: "PUT",
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
      }).then(res => res.json()).then(res => {
         refetch && refetch()
      })
   };

   return (
      <Card onClick={() => navigate(`/properties/${id}`)}>
         <Card.Head>
            <Card.TopInfo bg="blue" left="true">
               FEATURED
            </Card.TopInfo>
            <Card.TopInfo>FOR SALE</Card.TopInfo>
            <Card.UserPhoto src="https://snipp.ru/demo/560/image.jpeg" />
            <Card.Image
               src={attachments && attachments[0]?.imgPath}
               alt="house image"
            />
         </Card.Head>
         <Card.Content>
            <Global.H4 className="card-line" margin="4px" fw="600">
               {description || "No info"}
            </Global.H4>
            <Global.H5 className="card-line" margin="16px">
               {address}, {city}, {country}, {region}
            </Global.H5>
            <Details width="100%" color="gray" houseDetails={houseDetails} />
         </Card.Content>
         <Card.Footer>
            <div>
               <Global.OldPrice>${salePrice || 0}/mo</Global.OldPrice>
               <Global.Price>${price || 0}/mo</Global.Price>
            </div>
            <div className="card__buttons">
               <i className="card__resize icon-resize"></i>
               <Global.CircleIcon className={favorite && "active"} bg="red" onClick={favoriteChange}>
                  <i className="icon-love"></i>
               </Global.CircleIcon>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default HouseCard;
