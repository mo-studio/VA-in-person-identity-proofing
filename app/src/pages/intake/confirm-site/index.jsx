import Link from "next/link";
import React, { useContext } from "react";
import { StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";

import { IntakeContext } from "../../../contexts/IntakeContext";

export default function LocationConfirmationScreen() {
  const { location } = useContext(IntakeContext);
  const { name } = location.attributes;
  const { physical } = location.attributes.address || {};
  const { address1, city, state, zip } = physical && physical;

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
          <h1>Confirm your selection</h1>
          <div className="text">
            <p>You have chosen to verify at the following location:</p>
            <p>
              {name}
              <br />
              {address1}
              <br />
              {city}, {state} {zip}
            </p>
            <p>
              Please confirm that this is a location you will be able to visit
              in the next 10 days before continuing. If you would like to choose
              another location to verify {"in-person,"} please select the{" "}
              {'"Back"'} button.
            </p>
            <div className="wrapper button-wrapper">
              <Link href="/intake/verify-in-person">
                <button type="button" className="usa-button">
                  Continue
                </button>
              </Link>
            </div>
            <div className="wrapper button-wrapper">
              <Link href="/intake/select-site">
                <button
                  type="button"
                  className="usa-button usa-button--outline"
                >
                  Back
                </button>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
