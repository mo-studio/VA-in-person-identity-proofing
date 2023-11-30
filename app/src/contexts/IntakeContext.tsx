import { createContext, useState } from "react";

const initialIntakeData = {
  location: {
    id: "",
    attributes: {
      name: "",
      lat: 39.2904, // Baltimore, MD
      long: -76.6122, // Baltimore, MD
      address: {
        physical: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        },
      },
    },
  },
};

interface IIntakeData {
  location: {
    id: string;
    attributes: {
      name: string;
      lat: number;
      long: number;
      address: {
        physical: {
          address1: string;
          address2: string;
          city: string;
          state: string;
          zip: string;
        };
      };
    };
  };
}

interface IntakeContextType {
  intakeData: IIntakeData;
  setIntakeData: (location: IIntakeData) => void;
}

interface Props {
  children?: React.ReactNode;
}

const IntakeContext = createContext<IntakeContextType | null>(null);

function IntakeContextProvider({ children }: Props) {
  const [intakeData, setIntakeData] = useState<IIntakeData>(initialIntakeData);

  return (
    <IntakeContext.Provider value={{ intakeData, setIntakeData }}>
      {children}
    </IntakeContext.Provider>
  );
}

export { IntakeContextProvider, IntakeContext, initialIntakeData };
