import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import { useContext } from "react";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

export default function CaseNumerPage() {
  const contextValue = useContext(ProofingContext);
  const { proofingData } = contextValue || {
    proofingData: initialProofingData,
  };
  return (
    <div className="page">
      <div className="container">
        <h3>
          <b>Case Number: {proofingData.caseNumber}</b>
        </h3>
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="complete" />
          <StepIndicatorStep label="Validate ID" status="complete" />
          <StepIndicatorStep label="Fill in information" status="complete" />
          <StepIndicatorStep label="Complete verification" status="complete" />
        </StepIndicator>

        <h1 className="padding-x-0">Verification task closed</h1>
        <p className="text-bold">
          You have completed all of the steps of In-Person Identity Proofing for
          Case Number {proofingData.caseNumber}.
        </p>
        <p>
          If you have not already done so, have the applicant sign in to VA.gov
          using their Login.gov account.
        </p>
        <p>You may close this application window now.</p>
      </div>
    </div>
  );
}
