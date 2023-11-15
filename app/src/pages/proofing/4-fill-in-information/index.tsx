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

        <h1>Fill in Information</h1>

        <div className="text">
          <div className="wrapper button-wrapper">
            <Link href="/proofing/5-complete-verification">
              <button type="button" className="usa-button">
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
