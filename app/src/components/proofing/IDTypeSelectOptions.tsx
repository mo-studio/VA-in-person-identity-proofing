import React from "react";

const IDTypeSelectOptions: React.FC = () => {
  return (
    <>
      <option>- Select - </option>
      <option value="Driver's License or State-issued ID">
        {"Driver's License or State-issued ID"}
      </option>
      <option value="VHIC">VHIC</option>
    </>
  );
};

export default IDTypeSelectOptions;
