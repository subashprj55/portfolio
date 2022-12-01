import React, { useState, useContext } from "react";

const AppContex = React.createContext();

const AppProvider = ({ children }) => {
  const [footerLength, setFooterLenght] = useState();
  const [nightMood, setNightMood] = useState(false);
  return (
    <AppContex.Provider
      value={{ setFooterLenght, footerLength, nightMood, setNightMood }}
    >
      {children}
    </AppContex.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContex);
};
export { AppProvider };
