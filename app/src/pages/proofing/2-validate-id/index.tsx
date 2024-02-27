import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import Link from "next/link";
import { useContext } from "react";
import { Accordion } from "@trussworks/react-uswds";
import { AccordionItemProps } from "@trussworks/react-uswds/lib/components/Accordion/Accordion";

import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";
import SelectIDType from "src/components/proofing/SelectIDType";
import ValidateDocument from "src/components/proofing/ValidateDocument";

const validateIdSteps: AccordionItemProps[] = [
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

const items: AccordionItemProps[] = [
  {
    title: "Ask for photo ID",
    content: (
      <>
        <p className="margin-top-2 margin-bottom-3">
          In order to verify their identity, ask the applicant for one of the
          following forms of valid ID:
        </p>
        <Accordion
          bordered={true}
          items={validateIdSteps}
          multiselectable={true}
          className="spaced-accordion"
        />
        <p className="margin-top-3 margin-bottom-2">
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
    content: <SelectIDType />,
    expanded: false,
    id: "validate-id-step-2",
    headingLevel: "h4",
  },
  {
    title: "Validate document",
    content: <ValidateDocument />,
    expanded: false,
    id: "validate-id-step-3",
    headingLevel: "h4",
  },
];

export default function ConfirmEmailPage() {
  const contextValue = useContext(ProofingContext);
  const { proofingData } = contextValue || {
    proofingData: initialProofingData,
  };

  return (
    <div className="spaced-accordion page">
      <div className="container">
        <h3>
          <b>Case Number: {proofingData.caseNumber}</b>
        </h3>
        <section>
          <StepIndicator className="margin-top-4">
            <StepIndicatorStep
              title="Confirm email"
              status={StepStatus.COMPLETE}
            />
            <StepIndicatorStep
              title="Validate ID"
              status={StepStatus.CURRENT}
            />
            <StepIndicatorStep
              title="Fill in information"
              status={StepStatus.INCOMPLETE}
            />
            <StepIndicatorStep
              title="Complete verification"
              status={StepStatus.INCOMPLETE}
            />
          </StepIndicator>
          <h1 className="margin-bottom-4 padding-left-0">Validate ID</h1>

          <Accordion
            bordered={false}
            items={items}
            className="margin-bottom-4"
          />

          <Link href="/proofing/3-fill-in-information">
            <button
              type="button"
              className="usa-button usa-button--full-width margin-bottom-4"
              disabled={
                proofingData.idType === "" ||
                proofingData.isDocumentValidated === false
              }
            >
              Continue
            </button>
          </Link>
          <Link href="/proofing/1b-confirm-email">
            <button
              type="button"
              className="usa-button usa-button--outline usa-button--full-width"
            >
              Back
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
