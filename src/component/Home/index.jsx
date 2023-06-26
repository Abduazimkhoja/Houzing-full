import React from "react";
// import Intro from "../Intro";
import HouseCard from "../Generic/card/house";
import Category from "./category";
import Recommended from "./recomended";
import Why from "./why";
import Recent from "./recent";
import Banner from "./banner";
const Intro = React.lazy(() => import("../Intro"));

const Home = () => {
   return (
      <>
         <Intro />
         <Recommended />
         <Why/>
         <Category />
         <Banner/>
         <Recent />
      </>
   );
};
export default Home;
