import { initialIntakeData, IntakeContext } from "src/contexts/IntakeContext";

import Link from "next/link";
import { FormEvent, useContext } from "react";
import { Search } from "@trussworks/react-uswds";

import LocationOptions from "src/components/intake/LocationOptions";
import ProofingMap from "src/components/intake/ProofingMap";
import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";

export default function LocationSelectorScreen() {
  const contextValue = useContext(IntakeContext);
  const { intakeData, setIntakeData } = contextValue || {
    intakeData: initialIntakeData,
    setIntakeData: (data) => {
      return data;
    },
  };
  const { location } = intakeData;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIntakeData({ ...intakeData, isSiteSelected: true });
    // This is where we'd hit the API to get the locations.
    // For now, this is just a mock.
  };

  return (
    <div className="container">
      <StepIndicator>
        <StepIndicatorStep title="Home" status={StepStatus.COMPLETE} />
        <StepIndicatorStep title="Select site" status={StepStatus.CURRENT} />
        <StepIndicatorStep
          title="Confirm site"
          status={StepStatus.INCOMPLETE}
        />
        <StepIndicatorStep
          title="Verify in-person"
          status={StepStatus.INCOMPLETE}
        />
      </StepIndicator>
      <h1 className="padding-x-0">Choose a nearby site</h1>
      <div>
        <p className="margin-bottom-4">
          At this time In-person Identity Verification is available by walk-in
          appointment only. Enter your postal code below to find participating
          VA Medical Centers near you.
        </p>

        <Search
          className="usa-search__fullwidth"
          size="big"
          // value="21201"
          placeholder="21201"
          onSubmit={(e) => handleSubmit(e)}
        />

        <ProofingMap location={location} />

        {intakeData.isSiteSelected === true && <LocationOptions />}

        <div className="margin-bottom-4">
          <Link href="/intake/3-confirm-site">
            <button
              disabled={!location.id}
              type="button"
              className="usa-button usa-button--full-width"
            >
              Continue
            </button>
          </Link>
        </div>
        <div className="margin-top-4">
          <Link href="/intake/1-home">
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
