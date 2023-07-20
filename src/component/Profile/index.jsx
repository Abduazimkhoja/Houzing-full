import { Table } from "antd";
import { useData } from "../../hooks/useData";
import ListingTitle from "./ListingTitle";
import { Global } from "../../root/style";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";

const Profile = () => {
   let [data] = useData("/houses/me");
   data = data.map((houseData) => ({ ...houseData, key: houseData.id }));

   const navigate = useNavigate();

   const columns = [
      {
         title: "List Title",
         render: (singleHouseData) => <ListingTitle data={singleHouseData} />,
         key: "listTitle",
      },
      {
         title: "Date Published",
         render: () => <h1>No info</h1>,
         key: "datePublished",
      },
      {
         title: "Status",
         render: () => <h1>Pending</h1>,
         key: "status",
      },
      {
         title: "View",
         render: () => <h1>No info</h1>,
         key: "view",
      },
      {
         title: "Action",
         render: () => <h1>edit / delete</h1>,
         key: "action",
      },
   ];

   return (
      <Global.Container>
         <Global.FlexRowCenter margin="40px" jcsb="true">
            <Global.H3 color="cyanBlue">My Properties</Global.H3>
            <Button onClick={() => navigate("/myproperties/createhouse")}>
               Add house
            </Button>
         </Global.FlexRowCenter>
         <Table
            pagination={{
               position: [],
            }}
            dataSource={data}
            columns={columns}
         />
      </Global.Container>
   );
};
export default Profile;
