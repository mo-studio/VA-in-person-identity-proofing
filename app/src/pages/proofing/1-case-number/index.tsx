import Link from "next/link";
import { ChangeEvent, useContext } from "react";
import {
  Label,
  StepIndicator,
  StepIndicatorStep,
  TextInput,
} from "@trussworks/react-uswds";

import { ProofingContext } from "../../../contexts/ProofingContext";

export default function CaseNumerPage() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: {
      idType: "",
      isDocumentValidated: false,
      caseNumber: "",
      social_security_number: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      id_number: "",
      id_type: "",
      address_1: "",
      address_2: "",
      city: "",
      zipCode: "",
      dateOfBirth: "",
    },
    setProofingData: (data) => {
      return data;
    },
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      caseNumber: e.target.value,
    });
  };

  return (
    <div className="page">
      <div className="container">
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="current" />
          <StepIndicatorStep label="Validate ID" />
          <StepIndicatorStep label="Fill in information" />
          <StepIndicatorStep label="Complete verification" />
        </StepIndicator>

        <h1>Enter Case Number</h1>

        <div className="text">
          <p>
            Ask for the 8-digit case number that the applicant received in their
            email when they registered for In-Person Identity Proofing. This
            case number is valid for 10 days. Enter it into the case number
            field below and press continue.
          </p>
          <p>
            *If the applicant can’t find their case number, or if it is expired
            or otherwise invalid, they will need to create a new case number by
            signing into their Login.gov account.
          </p>
          <Label htmlFor="input-type-text">Case Number</Label>
          <TextInput
            value={proofingData.caseNumber}
            id="input-type-text"
            name="input-type-text"
            type="text"
            onChange={(e) => changeHandler(e)}
          />
          <div className="wrapper button-wrapper">
            <Link href="/proofing/2-confirm-email">
              <button
                type="button"
                className="usa-button"
                disabled={proofingData.caseNumber === ""}
              >
                Continue
              </button>
            </Link>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}
