import { createContext, useState } from "react";

interface IProofingData {
  idType: string;
  isDocumentValidated: boolean;
  caseNumber: string;
  social_security_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  id_number: string;
  id_type: string;
  address_1: string;
  address_2: string;
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
    social_security_number: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    id_number: "",
    id_type: "",
    address_1: "",
    address_2: "",
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
