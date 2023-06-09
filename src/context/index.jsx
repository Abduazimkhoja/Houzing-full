import PropertiesProvider from "./Properties";

const RootContext = ({ children }) => (
   <PropertiesProvider>{children}</PropertiesProvider>
);

export default RootContext;
