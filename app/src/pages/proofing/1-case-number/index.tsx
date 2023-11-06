import Link from "next/link";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

export default function CaseNumerPage() {
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

        <Link href="/proofing/2-confirm-email">
          <button type="button" className="usa-button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
