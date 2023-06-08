import { createContext, useReducer } from "react";
import PropertiesProvider from "./Properties";

export const Root = createContext();

const RootContext = ({ children }) => {
   
   return (
      <Root.Provider value="">
         <PropertiesProvider>{children}</PropertiesProvider>
      </Root.Provider>
   );
};

export default RootContext;
