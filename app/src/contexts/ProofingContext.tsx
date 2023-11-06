import { createContext, useState } from "react";

interface IIdType {
  idType: string;
}

interface IdTypeContextType {
  idType: IIdType;
  setIdType: (idType: IIdType) => void;
}

interface Props {
  children?: React.ReactNode;
}
const IdTypeContext = createContext<IdTypeContextType | null>(null);

function ProofingContextProvider({ children }: Props) {
  const [idType, setIdType] = useState<IIdType>({ idType: "" });

  return (
    <IdTypeContext.Provider
      value={{
        idType,
        setIdType,
      }}
    >
      {children}
    </IdTypeContext.Provider>
  );
}

export { ProofingContextProvider, IdTypeContext };
