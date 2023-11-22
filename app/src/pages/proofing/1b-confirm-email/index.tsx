import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import Link from "next/link";
import { useContext } from "react";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

export default function ConfirmEmailPage() {
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
          <StepIndicatorStep label="Confirm email" status="current" />
          <StepIndicatorStep label="Validate ID" />
          <StepIndicatorStep label="Fill in information" />
          <StepIndicatorStep label="Complete verification" />
        </StepIndicator>
        <h1 className="padding-x-0">Confirm applicant email</h1>

        <div>
          <p>
            Ask what email address is associated with the applicant’s Login.gov
            account. For security, you should not share the information on this
            screen; only confirm if it is correct or not correct.{" "}
          </p>
          <p>
            Case number <b>{proofingData.caseNumber}</b> is associated with the
            following email address:
          </p>
          {/* TODO: Replace this with state data */}
          <p className="text-bold">iparsons5@gmail.com</p>
          <p>
            If the email address provided by the applicant matches the email
            associated with the case number, click {"'Continue'"}.
          </p>
          <p>
            If the email address does not match, click the {"‘Back’"} button and
            help the applicant create a new case.
          </p>
          <div>
            <Link href="/proofing/2-validate-id">
              <button
                type="button"
                className="usa-button  usa-button--full-width margin-top-3 margin-bottom-4"
              >
                Continue
              </button>
            </Link>
            <Link href="/proofing/1a-case-number">
              <button
                type="button"
                className="usa-button usa-button--outline usa-button--full-width"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
