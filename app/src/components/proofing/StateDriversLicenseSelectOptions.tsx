import React from "react";

const StateDriversLicenseSelectOptions: React.FC = () => {
  return (
    <>
      <option>- Select - </option>
      <option value="MaineDL">{"Maine Driver's License"}</option>
      <option value="MarylandDL">{"Maryland Driver's License"}</option>
      <option value="MassachusettsDL">
        {"Massachusetts Driver's License"}
      </option>
      <option value="MichiganDL">{"Michigan Driver's License"}</option>
    </>
  );
};

export default StateDriversLicenseSelectOptions;
