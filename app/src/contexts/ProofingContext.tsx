import { initialProofingData } from "src/data/proofingData";

import { createContext, useState } from "react";

interface IProofingData {
  idType: string;
  idTypeState: string;
  isDocumentValidated: boolean;
  caseNumber: string;
  socialSecurityNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  address1: string;
  address2: string;
  city: string;
  zipCode: string;
  dateOfBirth: string;
  stateName: string;
  icn: string;
  isIamToolkitVerified: boolean;
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
  const [proofingData, setProofingData] =
    useState<IProofingData>(initialProofingData);

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
