import React from "react";

const StateDriversLicenseSelectOptions: React.FC = () => {
  return (
    <>
      <option>- Select - </option>
      <option value="Maine Driver's License">{"Maine Driver's License"}</option>
      <option value="Maryland Driver's License">
        {"Maryland Driver's License"}
      </option>
      <option value="Massachusetts Driver's License">
        {"Massachusetts Driver's License"}
      </option>
      <option value="Michigan Driver's License">
        {"Michigan Driver's License"}
      </option>
    </>
  );
};

export default StateDriversLicenseSelectOptions;
