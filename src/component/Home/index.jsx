import React from "react";
// import Intro from "../Intro";
import Category from "./category";
import Recommended from "./recommended";
import Why from "./why";
import Recent from "./recent";
import Banner from "./banner";
import Search from "../Search";
import { useData } from "../../hooks/useData";
import { Spin } from "antd";

const Intro = React.lazy(() => import("../Intro"));

const Home = () => {
   const [data, loading] = useData("/houses/list");

   if (loading || !data) return <Spin />;
   console.log(data);

   return (
      <>
         <Search />
         <Intro data={data} />
         <Recommended data={data} />
         <Why />
         <Category />
         <Banner />
         <Recent data={data} />
      </>
   );
};
export default Home;
