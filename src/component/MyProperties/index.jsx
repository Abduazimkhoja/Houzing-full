import { Table, message } from "antd";
import { useData } from "../../hooks/useData";
import ListingTitle from "./ListingTitle";
import { Global } from "../../root/style";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { useQuery } from "react-query";

const MyProperties = () => {
   // let [data] = useData("/houses/me");

   const { fetchData } = useRequest();

   const navigate = useNavigate();

   let { data, refetch } = useQuery([], () => {
      return fetchData({ url: `/houses/me`, authorize: true });
   });
   // Для каждого обьекта добавил элемент key
   data = data?.data
      ? data?.data.map((houseData) => ({ ...houseData, key: houseData.id }))
      : data?.data;

   const onDelete = (id) => {
      fetchData({
         url: `/houses/${id}`,
         method: "DELETE",
         authorize: true,
      }).then((res) => {
         if (res?.success) {
            refetch();
            message.success("Success deleted!")
         }
      });
   };

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
         render: ({ id }) => (
            <i className="icon-trash" onClick={() => onDelete(id)}></i>
         ),
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
export default MyProperties;