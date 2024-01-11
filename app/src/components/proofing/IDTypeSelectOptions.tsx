import React from "react";

const IDTypeSelectOptions: React.FC = () => {
  return (
    <>
      <option value="">- Select -</option>
      <option value="State-issued Driver's License">
        {"State-issued Driver's License"}
      </option>
      <option value="State-issued Identification Card">
        {"State-issued Identification Card"}
      </option>
      <option value="VHIC">VHIC</option>
    </>
  );
};

export default IDTypeSelectOptions;
