import { initialProofingData } from "src/data/proofingData";
import StateSelectOptions from "src/data/StateSelectOptions";

import Link from "next/link";
import { ChangeEvent, useContext, useState } from "react";
import {
  DatePicker,
  Label,
  Select,
  StepIndicator,
  StepIndicatorStep,
  TextInput,
} from "@trussworks/react-uswds";

import { ProofingContext } from "../../../contexts/ProofingContext";

export default function CaseNumerPage() {
  const [selectedIdType, setSelectedIdType] = useState("");
  // TODO: Should this be stored in Context isntead of local state?
  // How does this data get used?

  const handleDropdownChange = (e: { target: { value: any } }) => {
    const selectedValue = e.target.value;
    setProofingData({
      ...proofingData,
      idType: selectedValue,
    });
    setSelectedIdType(selectedValue);
    // You can do further processing with the selected value if needed
    console.log("Selected option:", selectedValue);
  };

  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
    setProofingData: (data) => {
      return data;
    },
  };

  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setProofingData({
      ...proofingData,
      [fieldName]: e.target.value,
    });
  };

  const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      dateOfBirth: String(e),
    });
  };

  return (
    <div className="page">
      <div className="container">
        <StepIndicator counters="small" headingLevel="h4">
          <StepIndicatorStep label="Confirm email" status="complete" />
          <StepIndicatorStep label="Validate ID" status="complete" />
          <StepIndicatorStep label="Fill in information" status="current" />
          <StepIndicatorStep label="Complete verification" />
        </StepIndicator>

        <h1>Fill in Information</h1>

        <div className="text">
          <p>
            Using the applicant’s validated documents, fill out the form below.
            As you fill out the form, make sure with the applicant that the
            information is correct, but do not show them this screen. Click
            {" ‘Continue’"} when this form is complete.
          </p>
          <p> Required fields are marked with an asterisk (*).</p>

          <Label htmlFor="first-name">Social Security Number</Label>
          <TextInput
            id="ssn"
            name="ssn"
            type="text"
            value={proofingData.socialSecurityNumber}
            onChange={(e) => inputChangeHandler(e, "socialSecurityNumber")}
          />

          <Label htmlFor="first-name">First name</Label>
          <TextInput
            id="fname"
            name="fname"
            type="text"
            value={proofingData.firstName}
            onChange={(e) => inputChangeHandler(e, "firstName")}
          />
          <Label htmlFor="middle-name">Middle initial</Label>
          <TextInput
            id="middle-name"
            name="middle-name"
            type="text"
            value={proofingData.middleName}
            onChange={(e) => inputChangeHandler(e, "middleName")}
          />
          <Label htmlFor="last-name">Last name</Label>
          <TextInput
            id="last-name"
            name="last-name"
            type="text"
            value={proofingData.lastName}
            onChange={(e) => inputChangeHandler(e, "lastName")}
          />

          <Label htmlFor="id-num">ID Number</Label>
          <TextInput
            id="id-num"
            name="id-num"
            type="text"
            value={proofingData.idNumber}
            onChange={(e) => inputChangeHandler(e, "idNumber")}
          />

          {/* TODO, how do we use this data? Do we need to persist it anywhere? */}
          <Label htmlFor="id-type">Select ID type</Label>
          <Select
            id="id-type"
            name="id-type"
            required
            value={selectedIdType}
            onChange={handleDropdownChange}
          >
            <option value="Drivers License">Drivers License</option>
            <option value="VHIC">VHIC</option>
          </Select>

          <Label id="birth-date-label" htmlFor="appointment-date">
            Date of Birth
          </Label>
          <DatePicker
            id="birth-date"
            name="Birthday"
            key="hello"
            value={proofingData.dateOfBirth}
            // TODO: figure how why field doesn't show previous value
            onChange={(e) => dateChangeHandler(e)}
          ></DatePicker>

          <Label htmlFor="mailing-address-1">Street address</Label>
          <TextInput
            id="mailing-address-1"
            name="mailing-address-1"
            type="text"
            value={proofingData.address1}
            onChange={(e) => inputChangeHandler(e, "address1")}
          />
          <Label htmlFor="mailing-address-2">Street address line 2</Label>
          <TextInput
            id="mailing-address-2"
            name="mailing-address-2"
            type="text"
            value={proofingData.address2}
            onChange={(e) => inputChangeHandler(e, "address2")}
          />
          <Label htmlFor="city">City</Label>
          <TextInput
            id="city"
            name="city"
            type="text"
            value={proofingData.city}
            onChange={(e) => inputChangeHandler(e, "city")}
            required
          />
          <Label htmlFor="state">State, territory, or military post</Label>
          <Select
            id="state"
            name="state"
            value={proofingData.stateName}
            onChange={(e) => inputChangeHandler(e, "stateName")}
            required
          >
            <StateSelectOptions />
          </Select>
          <Label htmlFor="zip">ZIP Code</Label>
          <TextInput
            id="zip"
            name="zip"
            type="text"
            pattern="[\d]{5}(-[\d]{4})?"
            value={proofingData.zipCode}
            onChange={(e) => inputChangeHandler(e, "zipCode")}
          />

          {/* TODO, is this field always displayed? We don't even have PR has an option in the states and territories. */}
          <Label htmlFor="urbanization">Urbanization (Puerto Rico only)</Label>
          <TextInput id="urbanization" name="urbanization" type="text" />

          <div className="wrapper button-wrapper">
            <Link href="/proofing/5-complete-verification">
              <button type="button" className="usa-button">
                Continue
              </button>
            </Link>
          </div>
          <div className="wrapper button-wrapper">
            <Link href="/proofing/3-validate-id">
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
    </div>
  );
}
