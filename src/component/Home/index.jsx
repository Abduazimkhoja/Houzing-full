import React from "react";
// import Intro from "../Intro";
import HouseCard from "../Generic/card/house";
import Category from "../category";
const Intro = React.lazy(() => import("../Intro"));

const Home = () => {
   return (
      <>
         <Intro />
         <HouseCard />
         <Category />
      </>
   );
};
export default Home;
