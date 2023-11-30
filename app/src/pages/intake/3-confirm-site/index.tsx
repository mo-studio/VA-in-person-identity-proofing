import { IntakeContext } from "src/contexts/IntakeContext";

import Link from "next/link";
import React, { useContext } from "react";

import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";

export default function LocationConfirmationScreen() {
  const { location } = useContext(IntakeContext);
  const { name } = location.attributes;
  const { address1, city, state, zip } = location.attributes.address.physical;

  return (
    <div className="page">
      <div className="container">
        <div className="white-box">
          <StepIndicator>
            <StepIndicatorStep title="Home" status={StepStatus.COMPLETE} />
            <StepIndicatorStep
              title="Select site"
              status={StepStatus.COMPLETE}
            />
            <StepIndicatorStep
              title="Confirm site"
              status={StepStatus.CURRENT}
            />
            <StepIndicatorStep
              title="Verify in-person"
              status={StepStatus.INCOMPLETE}
            />
          </StepIndicator>
          <h1 className="padding-x-0">Confirm your selection</h1>
          <div>
            <p className="margin-y-4">
              You have chosen to verify at the following location:
            </p>
            <p className="margin-y-4">
              {name}
              <br />
              {address1}
              <br />
              {city}, {state} {zip}
            </p>
            <p className="margin-y-4">
              Please confirm that this is a location you will be able to visit
              in the next 10 days before continuing. If you would like to choose
              another location to verify {"in-person,"} please select the{" "}
              {'"Back"'} button.
            </p>
            <div className="margin-y-4">
              <Link href="/intake/4-verify-in-person">
                <button
                  type="button"
                  className="usa-button usa-button--full-width"
                >
                  Continue
                </button>
              </Link>
            </div>
            <div className="margin-top-4">
              <Link href="/intake/2-select-site">
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
    </div>
  );
}
