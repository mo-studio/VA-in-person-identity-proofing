import Link from "next/link";
import { Accordion } from "@trussworks/react-uswds";

import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";

const items = [
  {
    title: "State-Issued ID or VHIC",
    content: (
      <>
        <p>At this time, the following forms of identification are accepted:</p>
        <ul>
          <li>
            <b>State-issued driver’s license or identification cards</b> from
            any of the 50 states, the District of Columbia (DC), or other US
            territories (Guam, US Virgin Islands, American Samoa, Mariana
            Islands and Puerto Rico)
          </li>
          <li>
            <b>Veteran Health Identification Card</b> <br />
            Please note that any form of ID you present must be authentic and
            non-expired.
          </li>
        </ul>
      </>
    ),
    expanded: false,
    id: "validate-id-step-1",
    headingLevel: "h4",
  },
  {
    title: "Proof of Address",
    content: (
      <>
        <p>
          If you present a VHIC, you must also provide additional documentation
          of proof of address in the form of a utility bill or bank statement.
        </p>
      </>
    ),
    expanded: false,
    id: "validate-id-step-2",
    headingLevel: "h4",
  },
  {
    title: "Social Security Number",
    content: (
      <>
        <p>
          You will need to provide VA staff with your Social Security Number so
          that they may verify your identity. You do not need to bring your
          physical Social Security card.
        </p>
      </>
    ),
    expanded: false,
    id: "validate-id-step-3",
    headingLevel: "h4",
  },
  {
    title: "Confirmation Case Number",
    content: (
      <>
        <p>
          Once you complete the steps here to register for In-Person Identity
          proofing, a confirmation case number will be created and emailed to
          you. This case number will be valid for 10 days. You will need to
          share it when you come in-person to verify your identity at a VA
          Medical Center. You can write your case number down, print the email,
          or show it from your mobile device. If you go to a VA Medical Center
          after the 10 days have passed, the case number will no longer be valid
          and you will need to sign in to your Login.gov account and repeat the
          process to register for In-Person Identity Proofing again.
        </p>
      </>
    ),
    expanded: false,
    id: "validate-id-step-4",
    headingLevel: "h4",
  },
];
export default function Intake() {
  return (
    <div className="page">
      <div className="container">
        <StepIndicator>
          <StepIndicatorStep title="Home" status={StepStatus.CURRENT} />
          <StepIndicatorStep
            title="Select site"
            status={StepStatus.INCOMPLETE}
          />
          <StepIndicatorStep
            title="Confirm site"
            status={StepStatus.INCOMPLETE}
          />
          <StepIndicatorStep
            title="Verify in-person"
            status={StepStatus.INCOMPLETE}
          />
        </StepIndicator>
        <h1 className="padding-x-0">In-person Identity Verification</h1>
        <div>
          <p className="margin-top-4">
            In-Person Identity Proofing is the process to verify your identity.
            You can verify your identity in person at a participating VA Medical
            Center.
          </p>
          <p>You will need to bring following items with you:</p>
          <br></br>
          <Accordion
            bordered={false}
            items={items}
            multiselectable={true}
            className="margin-bottom-4"
          />
          <div className="margin-y-4">
            <Link href="/intake/2-select-site">
              <button
                type="button"
                className="usa-button usa-button--full-width"
              >
                Continue
              </button>
            </Link>
          </div>
          <Link href="test"> Already have a case number? Click here </Link>
          <p className="margin-top-4">
            If you decide not to verify your identity in person, you may close
            this window at any time.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
