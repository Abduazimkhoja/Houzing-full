import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
   const [state, despatch] = useReducer(reducer,[])
   return (
      <PropertiesContext.Provider value={[state, despatch]}>
         {children}
      </PropertiesContext.Provider>
   );
};

export default PropertiesProvider;
