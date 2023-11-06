import { createContext, useState } from "react";

interface Step {
  label: string;
  status: string;
}

interface StepIndicatorProps {
  steps: Step[];
}
interface IProofing {
  idType: string;
  verifiedDocument: boolean;
  caseNumber: string;
  steps: StepIndicatorProps;
}

interface ProofingContextType {
  location: IProofing;
  setLocation: (location: IProofing) => void;
}

interface Props {
  children?: React.ReactNode;
}
const ProofingContext = createContext<ProofingContextType | null>(null);

function ProofingContextProvider({ children }: Props) {
  const [location, setLocation] = useState<IProofing>({
    idType: "",
    verifiedDocument: false,
    caseNumber: "",
    steps: [
      {
        label: "Confirm email",
        status: "current",
      },
      {
        label: "Validate ID",
        status: "incomplete",
      },
      {
        label: "Fill in information",
        status: "incomplete",
      },
      {
        label: "Complete verification",
        status: "incomplete",
      },
    ],
  });

  console.log(location);
  return (
    <ProofingContext.Provider value={{ location, setLocation }}>
      {children}
    </ProofingContext.Provider>
  );
}

export { ProofingContextProvider, ProofingContext };
