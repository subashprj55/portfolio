import React, { useState, useContext } from "react";

const AppContex = React.createContext();

const AppProvider = ({ children }) => {
  const [footerLength, setFooterLenght] = useState();
  return (
    <AppContex.Provider value={{ setFooterLenght, footerLength }}>
      {children}
    </AppContex.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContex);
};
export { AppProvider };
