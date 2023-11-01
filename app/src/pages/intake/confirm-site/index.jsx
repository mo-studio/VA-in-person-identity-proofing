import Link from 'next/link';
import React, {useContext} from 'react';
import { LocationContext } from '../../../contexts/LocationContext';

export default function LocationConfirmationScreen() {
  const { location } = useContext(LocationContext);
  const { name } = location.attributes;
  const { address1, city, state, zip } = location.attributes.address.physical;

  return (
    <div className="page">
      <div className="container">
        <div className="white-box">
          <br />
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
              in the next 10 days before continuing.
            </p>
            <div className="wrapper button-wrapper">
              <Link href="/intake/verify-in-person">
                <button
                  type="button"
                  className="usa-button"
                >
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