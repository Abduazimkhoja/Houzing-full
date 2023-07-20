import { Global } from "../../../root/style";
import { CardRow } from "./style";

const ListingTitle = ({ data }) => {
   const {
      id,
      address,
      city,
      country,
      region,
      price,
      salePrice,
      attachments,
      description,
   } = data;

   return (
      <Global.FlexRowCenter gap="20px">
         <CardRow.Sale bg="blue" left="true">
            FEATURED
         </CardRow.Sale>
         <CardRow.Sale>FOR SALE</CardRow.Sale>
         <CardRow.Image
            src={attachments && attachments[0]?.imgPath}
            alt="house image"
         />
         <Global.Block width="300px">
            <Global.H4 className="card-line" margin="4px" fw="600">
               {description || "No info"}
            </Global.H4>
            <Global.H5 className="card-line" margin="16px">
               {address}, {city}, {country}, {region}
            </Global.H5>
            <div>
               <Global.OldPrice>${salePrice || 0}/mo</Global.OldPrice>
               <Global.Price>${price || 0}/mo</Global.Price>
            </div>
         </Global.Block>
      </Global.FlexRowCenter>
   );
};
export default ListingTitle;
