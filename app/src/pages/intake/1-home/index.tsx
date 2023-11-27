import Link from "next/link";
import {
  Accordion,
  StepIndicator,
  StepIndicatorStep,
} from "@trussworks/react-uswds";

const items = [
  {
    title: "Your VHIC or state-issued ID",
    content: (
      <>
        <p className="margin-top-2 margin-bottom-3">
          At this time, the following forms of identification are accepted:
        </p>
        <ul>
          <li>
            <b>Driver’s license</b> from any of the 50 states, the District of
            Columbia (DC), or other US territories (Guam, US Virgin Islands,
            American Samoa, Mariana Islands and Puerto Rico)
          </li>
          <li>
            <b>Non-driver’s license resident ID card </b> from any of the 50
            states, the District of Columbia (DC), or other US territories
            (Guam, US Virgin Islands, American Samoa, Mariana Islands and Puerto
            Rico).
          </li>
          <li>
            <b>Veteran Health Identification Card</b>
          </li>
          <p>
            Please note that any form of ID you present must be authentic and
            non-expired.
          </p>
        </ul>
      </>
    ),
    expanded: false,
    id: "validate-id-step-1",
    headingLevel: "h4",
  },
  {
    title: "Proof of address",
    content: (
      <>
        <p className="margin-top-2 margin-bottom-2">
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
        <p className="margin-top-2 margin-bottom-4">
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
    title: "Confirmation case number",
    content: (
      <>
        <p className="margin-top-2 margin-bottom-4">
          Once you complete the steps on Login.gov, we’ll generate a
          confirmation case number that will be valid for 10 days. You can write
          this number down, print the email, or show the email from your mobile
          device. If you go to a VA Medical Center after the deadline, your
          information will not be saved and you will need to restart the
          process.{" "}
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
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Home" status="current" />
          <StepIndicatorStep label="Select site" />
          <StepIndicatorStep label="Confirm site" />
          <StepIndicatorStep label="Verify in-person" />
        </StepIndicator>
        <h1>In-person Identity Verification</h1>
        <div className="text">
          <p>
            In-Person Identity Proofing is the process to verify your identity.
            You can verify your identity in person at a participating VA Medical
            Center.
          </p>
          <p>You will need to bring following items with you:</p>
          <br></br>
          <Accordion
            bordered={false}
            items={items}
            className="margin-bottom-4"
          />
          <div className="wrapper button-wrapper">
            <Link href="/intake/2-select-site">
              <button type="button" className="usa-button">
                Continue
              </button>
            </Link>
          </div>
          <br></br>
          <Link href="test"> Already have a case number? Click here </Link>
          <p>
            If you decide not to verify your identity in-person, you may close
            this window at any time.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
