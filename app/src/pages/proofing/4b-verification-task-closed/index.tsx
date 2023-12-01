import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import { useContext } from "react";

import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";

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
        <StepIndicator className="margin-top-4">
          <StepIndicatorStep
            title="Confirm email"
            status={StepStatus.COMPLETE}
          />
          <StepIndicatorStep title="Validate ID" status={StepStatus.COMPLETE} />
          <StepIndicatorStep
            title="Fill in information"
            status={StepStatus.COMPLETE}
          />
          <StepIndicatorStep
            title="Complete verification"
            status={StepStatus.COMPLETE}
          />
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
