import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import { ChangeEvent, useContext } from "react";
import { Label, Select } from "@trussworks/react-uswds";

import StateSelectOptions from "./StateSelectOptions";

export default function SelectIDTypeState() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
    setProofingData: (data) => {
      return data;
    },
  };

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setProofingData({ ...proofingData, idTypeState: e.target.value });
  };

  return (
    <p className="margin-top-2 margin-bottom-2">
      <Label htmlFor="input-select" className="margin-top-4">
        State
      </Label>
      <Select
        id="input-select"
        name="input-select"
        value={proofingData.idTypeState}
        onChange={(e) => changeHandler(e)}
      >
        <StateSelectOptions />
      </Select>
    </p>
  );
}
