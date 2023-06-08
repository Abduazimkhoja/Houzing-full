import { createContext, useReducer } from "react";
import { PropertiesContext } from "./Properties";

export const Root = createContext();

const RootContext = ({ children }) => {
   
   return (
      <Root.Provider value="">
         <PropertiesContext>{children}</PropertiesContext>
      </Root.Provider>
   );
};

export default RootContext;
