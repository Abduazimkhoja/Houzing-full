import React from "react";
// import Intro from "../Intro";
import Category from "./category";
import Recommended from "./recommended";
import Why from "./why";
import Recent from "./recent";
import Banner from "./banner";

const Intro = React.lazy(() => import("../Intro"));

const Home = () => {
   return (
      <>
         <Intro />
         <Recommended />
         <Why />
         <Category />
         <Banner />
         <Recent />
      </>
   );
};
export default Home;
