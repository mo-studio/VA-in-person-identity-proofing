import { createContext, useState } from "react";

interface IProofingData {
  idType: string;
  isDocumentValidated: boolean;
  caseNumber: string;
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
