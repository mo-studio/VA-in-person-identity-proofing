import Link from "next/link";
import { Accordion, Checkbox, Label, Select } from "@trussworks/react-uswds";

const options = (
  <>
    <option>- Select - </option>
    <option value="LA">Lousiana Driver's License</option>
    <option value="ME">Maine Driver's License</option>
    <option value="MD">Maryland Driver's License</option>
    <option value="MA">Massachusetts Driver's License</option>
  </>
);

const validateIdSteps = [
  {
    title: "State-issued driver’s license or ID card",
    content: (
      <p>
        Driver’s license or non-driver’s license resident ID card from all 50
        states, the District of Columbia (DC), and other US territories (Guam,
        US Virgin Islands, American Samoa, Mariana Islands and Puerto Rico).
        Must be valid and not expired.
      </p>
    ),
    expanded: false,
    id: "validate-id-step-1.1",
    headingLevel: "h4",
  },
  {
    title: "Veteran Health ID Card (VHIC) with proof of address",
    content: (
      <p>
        If VHIC is presented, the applicant must also provide additional
        documentation of proof of address in the form of a utility bill or bank
        statement.
      </p>
    ),
    expanded: false,
    id: "validate-id-step-1.2",
    headingLevel: "h4",
  },
];

const items = [
  {
    title: "Ask for photo ID",
    content: (
      <>
        <p>
          In order to verify their identity, ask the applicant for one of the
          following forms of valid ID:
        </p>
        <Accordion bordered={true} items={validateIdSteps} />
        <p>
          Once an acceptable, unexpired photo ID (and proof of address if using
          VHIC) is collected, click ‘Select ID type’.
        </p>
      </>
    ),
    expanded: false,
    id: "validate-id-step-1",
    headingLevel: "h4",
  },
  {
    title: "Select ID type",
    content: (
      <>
        <p>
          Type in and select the appropriate ID Type from the drop-down menu
          below and then click ‘Validate document’.
          <Label htmlFor="input-select">ID Type</Label>
          <Select id="input-select" name="input-select">
            {options}
          </Select>
        </p>
      </>
    ),
    expanded: false,
    id: "validate-id-step-2",
    headingLevel: "h4",
  },
  {
    title: "Validate document",
    content: (
      <>
        <p>
          Use the information below to validate the authenticity of the
          applicant’s photo ID. Once you have reviewed the ID and determined
          that it is valid, click the check box for ‘Validated document’ and
          then click ‘Continue’ to proceed to the next step.
        </p>
        <p>
          Validate a <b>Maryland Driver’s License</b> by looking for the
          following features:
          <ul>
            <li>Polycarbonate card body</li>
            <li>Laser engraving</li>
            <li>Tactile text</li>
            <li>Inventory control number (backside)</li>
            <li>Color photo (backside)</li>
            <li>Rainbow printing (backside)</li>
            <li>Identity barcode (backside)</li>
          </ul>
        </p>
        <p>
          For additional resources to help you validate the authenticity of
          state-issued IDs, you may refer to our DMV Driver’s License Guide.
        </p>
        <Checkbox
          id="validated-document0checkbox"
          name="checkbox"
          label="Validated document"
          tile
        />
      </>
    ),
    expanded: false,
    id: "validate-id-step-3",
    headingLevel: "h4",
  },
];

export default function ConfirmEmailPage() {
  return (
    <div className="page">
      <div className="container">
        <section className="usa-section">
          <h1>Validate ID</h1>

          <Accordion bordered={false} items={items} />

          <Link href="/proofing/2-confirm-email">
            <button type="button" className="usa-button">
              Back
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
