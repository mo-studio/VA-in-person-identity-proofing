import { initialProofingData } from "src/data/proofingData";

import Link from "next/link";
import router from "next/router";
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
  const ssnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      socialSecurityNumber: e.target.value,
    });
  };
  const firstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      firstName: e.target.value,
    });
  };
  const midNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      middleName: e.target.value,
    });
  };
  const lastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      lastName: e.target.value,
    });
  };
  const idNumberNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      idNumber: e.target.value,
    });
  };
  const address1ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      address1: e.target.value,
    });
  };
  const address2ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      address2: e.target.value,
    });
  };
  const cityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      city: e.target.value,
    });
  };
  const zipCodeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      zipCode: e.target.value,
    });
  };
  const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      dateOfBirth: String(e),
    });
  };
  const stateNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProofingData({
      ...proofingData,
      stateName: String(e.target.value),
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
            onChange={(e) => ssnChangeHandler(e)}
          />

          <Label htmlFor="first-name">First name</Label>
          <TextInput
            id="fname"
            name="fname"
            type="text"
            onChange={(e) => firstNameChangeHandler(e)}
          />
          <Label htmlFor="middle-name">Middle initial</Label>
          <TextInput
            id="middle-name"
            name="middle-name"
            type="text"
            onChange={(e) => midNameChangeHandler(e)}
          />
          <Label htmlFor="last-name">Last name</Label>
          <TextInput
            id="last-name"
            name="last-name"
            type="text"
            onChange={(e) => lastNameChangeHandler(e)}
          />

          <Label htmlFor="id-num">ID Number</Label>
          <TextInput
            id="id-num"
            name="id-num"
            type="text"
            onChange={(e) => idNumberNameChangeHandler(e)}
          />
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
            onChange={(e) => dateChangeHandler(e)}
          ></DatePicker>

          <Label htmlFor="mailing-address-1">Street address</Label>
          <TextInput
            id="mailing-address-1"
            name="mailing-address-1"
            type="text"
            onChange={(e) => address1ChangeHandler(e)}
          />
          <Label htmlFor="mailing-address-2">Street address line 2</Label>
          <TextInput
            id="mailing-address-2"
            name="mailing-address-2"
            type="text"
            onChange={(e) => address2ChangeHandler(e)}
          />
          <Label htmlFor="city">City</Label>
          <TextInput
            id="city"
            name="city"
            type="text"
            onChange={(e) => cityChangeHandler(e)}
            required
          />
          <Label htmlFor="state">State, territory, or military post</Label>
          <Select
            id="state"
            name="state"
            onChange={(e) => stateNameChangeHandler(e)}
            required
          >
            <option>- Select -</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            <option value="AA">AA - Armed Forces Americas</option>
            <option value="AE">AE - Armed Forces Africa</option>
            <option value="AE">AE - Armed Forces Canada</option>
            <option value="AE">AE - Armed Forces Europe</option>
            <option value="AE">AE - Armed Forces Middle East</option>
            <option value="AP">AP - Armed Forces Pacific</option>
          </Select>
          <Label htmlFor="zip">ZIP Code</Label>
          <TextInput
            id="zip"
            name="zip"
            type="text"
            pattern="[\d]{5}(-[\d]{4})?"
            onChange={(e) => zipCodeChangeHandler(e)}
          />
          <Label htmlFor="urbanization">Urbanization (Puerto Rico only)</Label>
          <TextInput id="urbanization" name="urbanization" type="text" />
          <div className="wrapper button-wrapper">
            <Link href="/proofing/5-complete-verification">
              <button type="button" className="usa-button">
                Continue
              </button>
            </Link>
          </div>

          <br></br>
        </div>
      </div>
    </div>
  );
}
function setSelectedOption(selectedValue: any) {
  throw new Error("Function not implemented.");
}
