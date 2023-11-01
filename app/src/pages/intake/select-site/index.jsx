import React, { useContext } from 'react';
import Link from 'next/link';
// import { VaSearchInput } from '@department-of-veterans-affairs/component-library/dist/react-bindings';
import ProofingMap from './ProofingMap';
import LocationOptions from './LocationOptions';
import { LocationContext } from '../../../contexts/LocationContext';


export default function LocationSelectorScreen() {
  const { location, setLocation } = useContext(LocationContext);

  console.log(location)

  return (
    <div className="container">
      <h1>Choose a nearby site</h1>
      <div className="text">
        <p>
          At this time In-person Identity Verification is available by
          walk-in appointment only. Enter your postal code below to find
          participating VA Medical Centers near you.
        </p>

        {/* <VaSearchInput
          label="Search"
          onSubmit={e => handleSubmit(e)}
          value="21201"
          buttonText="Search"
        /> */}

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
  );
}