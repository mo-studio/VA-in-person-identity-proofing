import { createContext, useState } from "react";

interface ILocation {
  attributes: {
    lat: number;
    long: number;
  };
}

interface IntakeContextType {
  location: ILocation;
  setLocation: (location: ILocation) => void;
}

interface Props {
  children?: React.ReactNode;
}

const IntakeContext = createContext<IntakeContextType | null>(null);

function IntakeContextProvider({ children }: Props) {
  const [location, setLocation] = useState<ILocation>({
    attributes: { lat: 39.2904, long: -76.6122 },
  });

  console.log(location);
  return (
    <IntakeContext.Provider value={{ location, setLocation }}>
      {children}
    </IntakeContext.Provider>
  );
}

export { IntakeContextProvider, IntakeContext };
