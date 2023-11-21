import React from "react";

interface Props {
  // Define the props for your component here
}

const IDTypeSelectOptions: React.FC<Props> = () => {
  return (
    <>
      <option>- Select - </option>
      <option value="Lousiana Driver's License">
        Lousiana {"Driver's"} License
      </option>
      <option value="Maine Driver's License">Maine {"Driver's"} License</option>
      <option value="Maryland Driver's License">
        Maryland {"Driver's"} License
      </option>
      <option value="Massachusetts Driver's License">
        Massachusetts {"Driver's"} License
      </option>
    </>
  );
};

export default IDTypeSelectOptions;
