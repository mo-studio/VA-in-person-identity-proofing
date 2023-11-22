import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import Link from "next/link";
import { ChangeEvent, useContext } from "react";
import { Label, TextInput } from "@trussworks/react-uswds";

export default function CaseNumerPage() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
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
        <h1 className="padding-x-0">Enter Case Number</h1>

        <div>
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
          <Link href="/proofing/1b-confirm-email">
            <button
              type="button"
              className="usa-button usa-button--full-width margin-top-4"
              disabled={proofingData.caseNumber === ""}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
