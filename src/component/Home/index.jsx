import React from "react";
import Intro from "../Intro";
import HouseCard from "../Generic/card/house";
import CategoryCard from "../Generic/card/category";
import { Carousel } from "../Generic";
import { Global } from "../../root/style";

const Test = () => (
   <div
      style={{
         display: "flex",
         justifyContent: "space-between",
         gap: "20px",
      }}
   >
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
   </div>
);

const Home = () => {
   return (
      <>
         <Intro />
         <HouseCard />
            <Carousel dots={false} outside= "true">
               <Test />
               <Test />
            </Carousel>
      </>
   );
};
export default Home;
