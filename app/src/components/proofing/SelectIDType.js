import { useContext } from "react";
import { Label, Select } from "@trussworks/react-uswds";

import { IdTypeContext } from "../../contexts/ProofingContext";

export default function SelectIDType() {
  const { idType, setIdType } = useContext(IdTypeContext);

  console.log(idType);
  console.log(idType.idType);
  return (
    <p className="margin-top-2 margin-bottom-2">
      Type in and select the appropriate ID Type from the drop-down menu below
      and then click ‘Validate document’.
      <Label htmlFor="input-select" className="margin-top-4">
        ID Type
      </Label>
      <Select
        id="input-select"
        name="input-select"
        value={idType.idType}
        onChange={(e) => setIdType(e.target.value)}
      >
        <option>- Select - </option>
        <option value="Lousiana Driver's License">
          Lousiana Driver's License
        </option>
        <option value="Maine Driver's License">Maine Driver's License</option>
        <option value="Maryland Driver's License">
          Maryland Driver's License
        </option>
        <option value="Massachusetts Driver's License">
          Massachusetts Driver's License
        </option>
      </Select>
    </p>
  );
}
