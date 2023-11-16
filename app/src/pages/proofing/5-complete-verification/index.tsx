import Link from "next/link";
// import { ChangeEvent, useContext } from "react";
import {
  Accordion,
  StepIndicator,
  StepIndicatorStep,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from "@trussworks/react-uswds";
import { AccordionItemProps } from "@trussworks/react-uswds/lib/components/Accordion/Accordion";

const completeVerificationSteps: AccordionItemProps[] = [
  {
    title: "Instructions",
    content: (
      <>
        <p>
          You will need to validate that the applicant can be found in the
          Master Person Index (MPI) by logging into the Identity Access
          Management (IAM) toolkit. Do not close this window as you access the
          IAM toolkit.
        </p>
        <ol>
          <li>Open a new window and sign in to the IAM toolkit.</li>
          <li>
            Search for the applicant by their first name, last name, and/or
            Social Security Number.
          </li>
          <li>
            Confirm that the applicant’s profile exists in the toolkit and
            verify that the information matches the information from the
            summary.
          </li>
          <li>
            If the address is not up to date, have the applicant change their
            address in their VA.gov profile
          </li>
          <li>
            Type Veteran’s Internal Control Number (ICN) from their profile in
            IAM into the ICN input box.
          </li>
          <li>
            Exit the IAM toolkit and confirm the applicant’s email and physical
            address one last time before pressing “Complete.”
          </li>
        </ol>
      </>
    ),
    expanded: false,
    id: "complete-verification-step-1.1",
    headingLevel: "h4",
  },
  {
    title: "Verify in IAM toolkit",
    content: (
      <>
        <p>
          To complete the verification process, enter the applicant’s ICN that
          you wrote down from the previous screen and then check the box,
          ‘Verified in IAM identity management toolkit’. Confirm the applicant’s
          email and physical address one last time before pressing “Complete.”
        </p>
        {/* insert ICN text field here */}
        {/* insert Verified IAM checkbox here */}
      </>
    ),
    expanded: false,
    id: "complete-verification-step-1.2",
    headingLevel: "h4",
  },
  {
    title: "Confirm email and physical address",
    content: (
      <>
        <p>
          The applicant will be receiving a confirmation email that their
          identity has been verified at the following email address:
        </p>
        <p>
          <b>iparson5@gmail.com</b>
        </p>
        <p>
          The applicant that they will be receiving a physical confirmation
          letter through the mail sent to the following address:
        </p>
        <p>
          <b>231 Briarwood Road Baltimore, Maryland 21222</b>
        </p>
        <p>
          Please ask the applicant to sign into VA.gov with their Login.gov
          account now. If sign-in is successful, click the ‘Complete’ button
          below to close out this verification task and the associated case
          number.
        </p>
      </>
    ),
    expanded: false,
    id: "complete-verification-step-1.3",
    headingLevel: "h4",
  },
];

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

        <Accordion items={completeVerificationSteps} />

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
