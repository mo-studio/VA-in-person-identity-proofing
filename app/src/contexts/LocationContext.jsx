import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

function LocationContextProvider({ children }) {
  const [location, setLocation] = useState({});

  console.log(location)
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContextProvider, LocationContext };