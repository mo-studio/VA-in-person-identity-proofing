import Link from "next/link";
import { useContext } from "react";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

import { ProofingContext } from "../../../contexts/ProofingContext";

export default function ConfirmEmailPage() {
  const { proofingData, setProofingData } = useContext(ProofingContext);
  return (
    <div className="page">
      <div className="container">
        <h4>
          <b>Case Number: {proofingData.caseNumber}</b>
        </h4>
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="complete" />
          <StepIndicatorStep label="Validate ID" status="current" />
          <StepIndicatorStep label="Fill in information" />
          <StepIndicatorStep label="Complete verification" />
        </StepIndicator>
        <h1>Confirm applicant email</h1>

        <div className="text">
          <p>
            Ask what email address is associated with the applicant’s Login.gov
            account. For security, you should not share the information on this
            screen; only confirm if it is correct or not correct.{" "}
          </p>
          <p>
            Case number {proofingData.caseNumber} is associated with the
            following email address:
          </p>
          <p>iparsons5@gmail.com</p>
          <p>
            If the email address provided by the applicant matches the email
            associated with the case number, click 'Continue'.
          </p>
          <p>
            If the email address does not match, click the ‘Back’ button and
            help the applicant create a new case.
          </p>
          <div className="wrapper button-wrapper">
            <Link href="/proofing/3-validate-id">
              <button type="button" className="usa-button">
                Continue
              </button>
            </Link>
          </div>
          <div className="wrapper button-wrapper">
            <Link href="/proofing/1-case-number">
              <button type="button" className="usa-button usa-button--outline">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
