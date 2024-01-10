import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import { ChangeEvent, useContext } from "react";
import { Label, Select } from "@trussworks/react-uswds";

import IDTypeSelectOptions from "./IDTypeSelectOptions";
import SelectIDTypeState from "./SelectIDTypeState";

export default function SelectIDType() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
    setProofingData: (data) => {
      return data;
    },
  };
  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setProofingData({ ...proofingData, idType: e.target.value });
  };

  return (
    <div>
      <p className="margin-top-2 margin-bottom-2">
        Type in and select the appropriate ID Type from the drop-down menu below
        and then click ‘Validate document’.
      </p>
      <Label htmlFor="input-select" className="margin-top-4">
        ID Type
      </Label>
      <Select
        id="input-select"
        name="input-select"
        value={proofingData.idType}
        onChange={(e) => changeHandler(e)}
      >
        <IDTypeSelectOptions />
      </Select>
      {/* // TODO: Replace with a shared variable if this becomes more than 2 options */}
      {(proofingData.idType === "State-issued Driver's License" ||
        proofingData.idType === "State-issued Identification Card") && (
        <SelectIDTypeState />
      )}
    </div>
  );
}
