import Link from "next/link";
// import { ChangeEvent, useContext } from "react";
import {
  StepIndicator,
  StepIndicatorStep,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from "@trussworks/react-uswds";

export default function CaseNumerPage() {
  // TODO: Replace hardcoded data with context from previous pages
  const tempFirstName = "Isabel";
  const tempMiddleInitial = "D.";
  const tempLastName = "Parsons";
  const tempSSN = "123-45-6789";
  const tempDOB = "12/03/1954";
  const tempAddress1 = "231 Briarwood Road";
  const tempAddress2 = "";
  const tempCity = "Baltimore";
  const tempState = "Maryland";
  const tempZip = "21222";
  // end TODO

  return (
    <div className="page">
      <div className="container">
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="complete" />
          <StepIndicatorStep label="Validate ID" status="complete" />
          <StepIndicatorStep label="Fill in information" status="complete" />
          <StepIndicatorStep label="Complete verification" status="current" />
        </StepIndicator>

        <h1>Complete verification</h1>

        <SummaryBox>
          <SummaryBoxHeading headingLevel="h3">
            Applicant Summary
          </SummaryBoxHeading>
          <SummaryBoxContent>
            Name: {tempFirstName} {tempMiddleInitial} {tempLastName}
            <br />
            Social Security Number: {tempSSN}
            <br />
            DOB: {tempDOB}
            <br />
            Address: {tempAddress1}
            {tempAddress2}, {tempCity}, {tempState} {tempZip}
          </SummaryBoxContent>
        </SummaryBox>

        <p>
          To adjust the information in this summary box, click ‘Back’ and adjust
          the content in the form.
        </p>

        <div className="text">
          <div className="wrapper button-wrapper">
            <Link href="/proofing/6-verification-task-closed">
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
