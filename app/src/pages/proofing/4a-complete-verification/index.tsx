import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import Link from "next/link";
import { ChangeEvent, useContext } from "react";
import {
  Accordion,
  Checkbox,
  Label,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
  TextInput,
} from "@trussworks/react-uswds";
import { AccordionItemProps } from "@trussworks/react-uswds/lib/components/Accordion/Accordion";

import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";

export default function CompleteVerification() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
    setProofingData: (data) => {
      return data;
    },
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      icn: e.target.value,
    });
  };

  const checkboxChangeHandler = () => {
    setProofingData({
      ...proofingData,
      isIamToolkitVerified: !proofingData.isIamToolkitVerified,
    });
  };

  const formattedAddress = `${proofingData.address1}${
    proofingData.address2 ? ", " : ""
  }${proofingData.address2}, ${proofingData.city}, ${proofingData.stateName} ${
    proofingData.zipCode
  }`;
  const formattedName = `${proofingData.firstName} ${proofingData.middleName} ${proofingData.lastName}`;

  const completeVerificationSteps: AccordionItemProps[] = [
    {
      title: "Instructions",
      content: (
        <div className="margin-top-2">
          <p>
            You will need to validate that the applicant can be found in the
            Master Person Index (MPI) by logging into the Identity Access
            Management (IAM) toolkit. Do not close this window as you access the
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
            className="margin-bottom-4"
            type="text"
            width="100%"
            value={proofingData.icn}
            // TODO: What do we do with this ICN? Is it sensative? Do we send it to the DB?
            onChange={(e) => changeHandler(e)}
          />

          {/* insert Verified IAM checkbox here */}
          <Checkbox
            id="validated-iam-checkbox"
            name="validated-iam-checkbox"
            label="Verified in IAM toolkit"
            tile
            checked={proofingData.isIamToolkitVerified}
            // TODO: What do we do with this boolean? Local context? Do we send it to the DB?
            onChange={() => checkboxChangeHandler()}
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
            identity has been verified at following address:
          </p>
          <p>
            {/* TODO: Fill this from context */}
            <b>iparson5@gmail.com</b>
          </p>
          <p>
            Tell the applicant that they will be receiving a physical
            confirmation letter through the mail sent to the following address:
          </p>
          <p>
            <b>{formattedAddress}</b>
          </p>
          <p>
            Please ask the applicant to sign into VA.gov with their Login.gov
            account now. If sign-in is successful, click the ‘Continue’ button
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
    <div className="spaced-accordion page">
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
            status={StepStatus.CURRENT}
          />
        </StepIndicator>

        <h1 className="padding-x-0">Complete verification</h1>

        <SummaryBox>
          <SummaryBoxHeading headingLevel="h3">
            Applicant Summary
          </SummaryBoxHeading>
          <SummaryBoxContent>
            Name: {formattedName}
            <br />
            Social Security Number: {proofingData.socialSecurityNumber}
            <br />
            DOB: {proofingData.dateOfBirth}
            <br />
            Address: {formattedAddress}
          </SummaryBoxContent>
        </SummaryBox>

        <p className="margin-top-3 margin-bottom-4">
          To adjust the information in this summary box, click ‘Back’ and adjust
          the content in the form.
        </p>

        <Accordion items={completeVerificationSteps} />

        <div>
          <Link href="/proofing/4b-verification-task-closed">
            <button
              type="button"
              className="margin-top-4 margin-bottom-4 usa-button usa-button--full-width"
              disabled={
                // Only enable the button if the user inputted the ICN and verified in IAM toolkit
                proofingData.isIamToolkitVerified === false ||
                proofingData.icn === ""
              }
            >
              Continue
            </button>
          </Link>
          <Link href="/proofing/3-fill-in-information">
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
