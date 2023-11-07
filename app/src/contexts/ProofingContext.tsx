import { createContext, useState } from "react";

interface IProofingData {
  idType: string;
  isDocumentValidated: boolean;
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
    idType: "",
    isDocumentValidated: false,
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
