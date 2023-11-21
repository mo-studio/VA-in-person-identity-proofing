import { createContext, useState } from "react";

interface IProofingData {
  idType: string;
  isDocumentValidated: boolean;
  caseNumber: string;
  socialSecurityNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  idType: string;
  address1: string;
  addres2: string;
  city: string;
  zipCode: string;
  dateOfBirth: string;
  stateName: string;
  // Add new attributes/datatypes here
}

interface proofingDataContextType {
  proofingData: IProofingData;
  setProofingData: (idType: IProofingData) => void;
}

interface Props {
  children?: React.ReactNode;
}

const ProofingContext = createContext<proofingDataContextType | null>(null);

function ProofingContextProvider({ children }: Props) {
  const [proofingData, setProofingData] = useState<IProofingData>({
    caseNumber: "",
    idType: "",
    isDocumentValidated: false,
    socialSecurityNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    idNumber: "",
    idType: "",
    address1: "",
    addres2: "",
    city: "",
    zipCode: "",
    dateOfBirth: "",
    stateName: "",
    // Add default values for new attributes here
  });

  return (
    <ProofingContext.Provider
      value={{
        proofingData,
        setProofingData,
      }}
    >
      {children}
    </ProofingContext.Provider>
  );
}

export { ProofingContextProvider, ProofingContext };
