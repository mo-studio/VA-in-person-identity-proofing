import { initialIntakeData, IntakeContext } from "src/contexts/IntakeContext";

import Link from "next/link";
import React, { useContext } from "react";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

export default function LocationConfirmationScreen() {
  const contextValue = useContext(IntakeContext);
  const { intakeData } = contextValue || {
    intakeData: initialIntakeData,
    setIntakeData: (data) => {
      return data;
    },
  };

  const { name, address } = intakeData.location.attributes;
  const { address1, city, state, zip } = address.physical;

  return (
    <div className="page">
      <div className="container">
        <div className="white-box">
          <br />
          <StepIndicator counters="small" headingLevel="h4">
            <StepIndicatorStep label="Home" status="complete" />
            <StepIndicatorStep label="Select site" status="complete" />
            <StepIndicatorStep label="Confirm site" status="current" />
            <StepIndicatorStep label="Verify in-person" />
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
