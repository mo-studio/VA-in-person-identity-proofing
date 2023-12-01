declare module "src/components/intake/ProofingMap" {
  import { FunctionComponent } from "react";
  import { IIntakeData } from "src/contexts/IntakeContext";

  export interface ProofingMapProps {
    location: IIntakeData;
  }

  const ProofingMap: FunctionComponent<ProofingMapProps>;

  export default ProofingMap;
}
