import React from "react";
import useId from "../hooks/useId";
import SignInPage from "../pages/Singin";
import FavoritePage from "../pages/Favorite";

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
      element: <SignInPage />,
      title: "Sign In",
      path: "/signin",
      private: false,
      hidden: true,
   },
   {
      id: useId,
      element: <h1>Sign Up</h1>,
      title: "Sign Up",
      path: "/signup",
      private: false,
      hidden: true,
   },
];
