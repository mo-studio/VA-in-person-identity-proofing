import Link from "next/link";
import { useContext } from "react";
import {
  Search,
  StepIndicator,
  StepIndicatorStep,
} from "@trussworks/react-uswds";

import { IntakeContext } from "../../../contexts/IntakeContext";
import LocationOptions from "./LocationOptions";
import ProofingMap from "./ProofingMap";

export default function LocationSelectorScreen() {
  const { location, setLocation } = useContext(IntakeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where we'd hit the API to get the locations.
    // For now, this is just a mock.
  };

  return (
    <div className="container">
      <StepIndicator counters="small" headingLevel="h4">
        <StepIndicatorStep label="Home" status="complete" />
        <StepIndicatorStep label="Select site" status="current" />
        <StepIndicatorStep label="Confirm site" />
        <StepIndicatorStep label="Verify in-person" />
      </StepIndicator>
      <h1>Choose a nearby site</h1>
      <div className="text">
        <p>
          At this time In-person Identity Verification is available by walk-in
          appointment only. Enter your postal code below to find participating
          VA Medical Centers near you.
        </p>

        <Search
          className="usa-search__fullwidth"
          size="big"
          value="21201"
          placeholder="21201"
          onSubmit={(e) => handleSubmit(e)}
        />

        <ProofingMap location={location} />

        <LocationOptions location={location} setLocation={setLocation} />

        <div className="wrapper button-wrapper">
          <Link href="/intake/confirm-site">
            <button
              disabled={!location.id}
              type="button"
              className="usa-button"
            >
              Continue
            </button>
          </Link>
        </div>
        <div className="wrapper button-wrapper">
          <Link href="/intake">
            <button type="button" className="usa-button usa-button--outline">
              Back
            </button>
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}
