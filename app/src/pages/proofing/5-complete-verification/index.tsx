import Link from "next/link";
import { useContext } from "react";
import {
  Accordion,
  Checkbox,
  Label,
  StepIndicator,
  StepIndicatorStep,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
  TextInput,
} from "@trussworks/react-uswds";
import { AccordionItemProps } from "@trussworks/react-uswds/lib/components/Accordion/Accordion";

import { ProofingContext } from "../../../contexts/ProofingContext";

export default function CaseNumerPage() {
  const contextValue = useContext(ProofingContext);
  const { proofingData } = contextValue || {
    proofingData: { idType: "", isDocumentValidated: false, caseNumber: "" },
  };

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

  const completeVerificationSteps: AccordionItemProps[] = [
    {
      title: "Instructions",
      content: (
        <div className="margin-top-2">
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
              Exit the IAM toolkit and confirm the applicant’s email and
              physical address one last time before pressing “Complete.”
            </li>
          </ol>
        </div>
      ),
      expanded: false,
      id: "complete-verification-step-1.1",
      headingLevel: "h4",
    },
    {
      title: "Verify in IAM toolkit",
      content: (
        <div className="margin-top-2">
          <p>
            To complete the verification process, enter the applicant’s ICN that
            you wrote down from the previous screen and then check the box,
            ‘Verified in IAM identity management toolkit’. Confirm the
            applicant’s email and physical address one last time before pressing
            “Complete.”
          </p>
          <Label htmlFor="icn-input">ICN</Label>
          <TextInput
            id="icn-input"
            name="icn-input"
            type="text"
            width="100%"
            // TODO: What do we do with this ICN? Is it sensative? Do we send it to the DB?
            onChange={(e) => console.log(e.target.value)}
          />

          {/* insert Verified IAM checkbox here */}
          <Checkbox
            id="validated-iam-checkbox"
            name="validated-iam-checkbox"
            label="Verified in IAM toolkit"
            tile
            checked={proofingData.isDocumentValidated}
            // TODO: What do we do with this boolean? Local context? Do we send it to the DB?
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      ),
      expanded: false,
      id: "complete-verification-step-1.2",
      headingLevel: "h4",
    },
    {
      title: "Confirm email and physical address",
      content: (
        <div className="margin-top-2">
          <p>
            The applicant will be receiving a confirmation email that their
            identity has been verified at the following email address:
          </p>
          <p>
            {/* TODO: Fill this from context */}
            <b>iparson5@gmail.com</b>
          </p>
          <p>
            The applicant that they will be receiving a physical confirmation
            letter through the mail sent to the following address:
          </p>
          <p>
            <b>
              {tempAddress1} {tempAddress2 ? tempAddress2 : ""}, {tempCity},{" "}
              {tempState} {tempZip}
            </b>
          </p>
          <p>
            Please ask the applicant to sign into VA.gov with their Login.gov
            account now. If sign-in is successful, click the ‘Complete’ button
            below to close out this verification task and the associated case
            number.
          </p>
        </div>
      ),
      expanded: false,
      id: "complete-verification-step-1.3",
      headingLevel: "h4",
    },
  ];

  return (
    <div className="proofing page">
      <div className="container">
        <h3>
          <b>Case Number: {proofingData.caseNumber}</b>
        </h3>
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="complete" />
          <StepIndicatorStep label="Validate ID" status="complete" />
          <StepIndicatorStep label="Fill in information" status="complete" />
          <StepIndicatorStep label="Complete verification" status="current" />
        </StepIndicator>

        <h1 className="padding-x-0">Complete verification</h1>

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

        <p className="margin-top-3 margin-bottom-4">
          To adjust the information in this summary box, click ‘Back’ and adjust
          the content in the form.
        </p>

        <Accordion items={completeVerificationSteps} />

        <div>
          <Link href="/proofing/6-verification-task-closed">
            <button
              type="button"
              className="margin-top-4 margin-bottom-4 usa-button usa-button--full-width"
            >
              Continue
            </button>
          </Link>
          <Link href="/proofing/2-confirm-email">
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
  );
}
