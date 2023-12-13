import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import { useContext } from "react";
import { Checkbox } from "@trussworks/react-uswds";

export default function SelectIDType() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
    setProofingData: (data) => {
      return data;
    },
  };
  function stateIsSelectedForDL() {
    if (proofingData.idType != "State-issued Driver's License") {
      return true;
    }
    if (
      proofingData.idType === "State-issued Driver's License" &&
      proofingData.driverLicenseState != ""
    ) {
      return true;
    }
    return false;
  }
  function IdDisplay() {
    let idDisplayed = proofingData.idType;
    if (proofingData.idType === "State-issued Driver's License") {
      idDisplayed = proofingData.driverLicenseState;
    }
    return idDisplayed;
  }

  return proofingData.idType === "" || stateIsSelectedForDL() === false ? (
    <p>Select an ID Type above.</p>
  ) : (
    <>
      <p className="margin-top-2 margin-bottom-4">
        Use the information below to validate the authenticity of the
        {"applicant's "} photo ID. Once you have reviewed the ID and determined
        that it is {"valid,"} click the check box for {"'Validated document' "}
        and then click {"'Continue'"} to proceed to the next step.
      </p>
      <p>
        Validate a <b>{IdDisplay()}</b> by looking for the following features:
      </p>
      <ul>
        <li>Polycarbonate card body</li>
        <li>Laser engraving</li>
        <li>Tactile text</li>
        <li>Inventory control number (backside)</li>
        <li>Color photo (backside)</li>
        <li>Rainbow printing (backside)</li>
        <li>Identity barcode (backside)</li>
      </ul>
      <p className="margin-top-3 margin-bottom-3">
        {
          "For additional resources to help you validate the authenticity of state-issued IDs, you may refer to our DMV Driver's License Guide."
        }
      </p>
      <Checkbox
        id="validated-document0checkbox"
        name="checkbox"
        label="Validated document"
        tile
        checked={proofingData.isDocumentValidated}
        onChange={() =>
          setProofingData({
            ...proofingData,
            isDocumentValidated: !proofingData.isDocumentValidated,
          })
        }
      />
    </>
  );
}
