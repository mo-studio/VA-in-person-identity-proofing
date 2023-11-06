import Link from "next/link";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

export default function ConfirmEmailPage() {
  return (
    <div className="page">
      <div className="container">
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="complete" />
          <StepIndicatorStep label="Validate ID" status="current" />
          <StepIndicatorStep label="Fill in information" />
          <StepIndicatorStep label="Complete verification" />
        </StepIndicator>
        <h1>Confirm applicant email</h1>

        <Link href="/proofing/3-validate-id">
          <button type="button" className="usa-button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
