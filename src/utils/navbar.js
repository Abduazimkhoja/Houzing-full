import React from "react";
import useId from "../hooks/useId";
import FavoritePage from "../pages/Favorite";
import RegistrationPage from "../pages/Registration";

const HomePage = React.lazy(() => import("../pages/Home"));
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HouseItemPage = React.lazy(() => import("../pages/HouseItem"));

export const navbar = [
   {
      id: useId,
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <HomePage />
         </React.Suspense>
      ),
      title: "Home",
      path: "/home",
      private: false,
      hidden: false,
   },
   {
      id: useId,
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <PropertiesPage />
         </React.Suspense>
      ),
      title: "Properties",
      path: "/properties",
      private: false,
      hidden: false,
   },
   {
      id: useId,
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <FavoritePage />
         </React.Suspense>
      ),
      title: "Favorites",
      path: "/favorites",
      private: true,
      hidden: true,
   },
   {
      id: useId,
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <HouseItemPage />
         </React.Suspense>
      ),
      title: "Single House",
      path: "/properties/:id",
      private: false,
      hidden: true,
   },
   {
      id: useId,
      element: <RegistrationPage />,
      title: "Registration",
      path: "/registration",
      private: false,
      hidden: true,
   },
];
