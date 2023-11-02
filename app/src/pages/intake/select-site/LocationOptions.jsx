import React,  { useContext, useState } from 'react';
import mockLocations from '../data/locations';
import { LocationContext } from '../../../contexts/LocationContext';
import { Radio } from '@trussworks/react-uswds'


export default function LocationOptions() {
  const { location, setLocation } = useContext(LocationContext);
  const [ activeRadio, setActiveRadio ] = useState("");

  const toggleLocation = (newLocation) => {
    setActiveRadio(newLocation.id);
    setLocation(newLocation);
  };

  return (
    <div>
      <fieldset className="usa-fieldset">
        <ul className="usa-card-group">
          {mockLocations.data.map((site, index) => {
            const { name } = site.attributes;
            const {
              address1,
              city,
              state,
              zip,
            } = site.attributes.address.physical;
            const { main, mentalHealthClinic } = site.attributes.phone;
            const isChecked = site.id === location.id;
            console.log("isChecked", isChecked)
            console.log("activeRadio === site.id", activeRadio === site.id)
            
            return (
              <li className="usa-card grid-col-12" key={index}>
                <div className="usa-card__container">
                  <div className="usa-radio">
                    <h2>{name}</h2>
                    <p>
                      {address1}
                      <br />
                      {city}, {state} {zip}
                      <br />
                      Main phone: {main}
                      <br />
                      Mental health care: {mentalHealthClinic}
                    </p>
                    <Radio 
                      id={site.id} 
                      value={site.id} 
                      checked={activeRadio === site.id} 
                      onChange={() => toggleLocation(site)} 
                      name="site-selection" 
                      label="Verify at this site" 
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
}