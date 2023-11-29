import React from "react";

interface Props {
  // Define the props for your component here
}

const IDTypeSelectOptions: React.FC<Props> = () => {
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
