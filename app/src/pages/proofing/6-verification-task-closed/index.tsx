import Link from "next/link";
import { ChangeEvent, useContext } from "react";
import {
  Label,
  StepIndicator,
  StepIndicatorStep,
  TextInput,
} from "@trussworks/react-uswds";

export default function CaseNumerPage() {
  return (
    <div className="page">
      <div className="container">
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="current" />
          <StepIndicatorStep label="Validate ID" />
          <StepIndicatorStep label="Fill in information" />
          <StepIndicatorStep label="Complete verification" />
        </StepIndicator>

        <h1>Verification task closed</h1>
      </div>
    </div>
  );
}
