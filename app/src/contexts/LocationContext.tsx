import { createContext, useState } from "react";

interface ILocation {
  attributes: {
    lat: number;
    long: number;
  };
}

interface LocationContextType {
  location: ILocation;
  setLocation: (location: ILocation) => void;
}

interface Props {
  children?: React.ReactNode;
}
const LocationContext = createContext<LocationContextType | null>(null);

function LocationContextProvider({ children }: Props) {
  const [location, setLocation] = useState<ILocation>({
    attributes: { lat: 39.2904, long: -76.6122 },
  });

  console.log(location);
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContextProvider, LocationContext };
