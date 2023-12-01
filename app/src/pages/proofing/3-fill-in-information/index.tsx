import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";

import Link from "next/link";
import { ChangeEvent, useContext } from "react";
import { DatePicker, Label, Select, TextInput } from "@trussworks/react-uswds";

import StepIndicator from "src/components/LoginDesignSystem/step-indicator/step-indicator";
import StepIndicatorStep, {
  StepStatus,
} from "src/components/LoginDesignSystem/step-indicator/step-indicator-step";
import IDTypeSelectOptions from "src/components/proofing/IDTypeSelectOptions";
import StateSelectOptions from "src/components/proofing/StateSelectOptions";

function formatDate(inputDate: string): string {
  if (inputDate === "") {
    return "";
  }
  const originalDate = new Date(inputDate);
  const formattedDate = Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(originalDate);
  return formattedDate;
}
export default function CaseNumerPage() {
  const contextValue = useContext(ProofingContext);
  const { proofingData, setProofingData } = contextValue || {
    proofingData: initialProofingData,
    setProofingData: (data) => {
      return data;
    },
  };

  const isContinueButtonDisabled =
    proofingData.socialSecurityNumber === "" ||
    proofingData.firstName === "" ||
    proofingData.lastName === "" ||
    proofingData.dateOfBirth === "" ||
    proofingData.address1 === "" ||
    proofingData.city === "" ||
    proofingData.stateName === "" ||
    proofingData.zipCode === "" ||
    proofingData.idType === "" ||
    proofingData.idNumber === "";

  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    setProofingData({
      ...proofingData,
      [fieldName]: e.target.value,
    });
  };

  const dateChangeHandler = (date: string | undefined) => {
    // Handle the case where date is undefined
    if (date === undefined) {
      // Handle accordingly, for example, set a default value or perform other logic
      return;
    }
    setProofingData({
      ...proofingData,
      dateOfBirth: date,
    });
  };

  return (
    <div className="page">
      <div className="container">
        <h3>
          <b>Case Number: {proofingData.caseNumber}</b>
        </h3>
        <StepIndicator className="margin-top-4">
          <StepIndicatorStep
            title="Confirm email"
            status={StepStatus.COMPLETE}
          />
          <StepIndicatorStep title="Validate ID" status={StepStatus.COMPLETE} />
          <StepIndicatorStep
            title="Fill in information"
            status={StepStatus.CURRENT}
          />
          <StepIndicatorStep
            title="Complete verification"
            status={StepStatus.INCOMPLETE}
          />
        </StepIndicator>

        <h1 className="padding-x-0">Fill in Information</h1>

        <div>
          <p>
            Using the applicant’s validated documents, fill out the form below.
            As you fill out the form, make sure with the applicant that the
            information is correct, but do not show them this screen. Click
            {" ‘Continue’"} when this form is complete.
          </p>

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
          <Label htmlFor="middle-name">Middle initial (optional)</Label>
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

          <Label htmlFor="id-type">ID Type</Label>
          <Select
            id="id-type"
            name="id-type"
            required
            value={proofingData.idType}
            disabled
          >
            <IDTypeSelectOptions />
          </Select>

          <Label htmlFor="id-num">ID Number</Label>
          <TextInput
            id="id-num"
            name="id-num"
            type="text"
            value={proofingData.idNumber}
            onChange={(e) => inputChangeHandler(e, "idNumber")}
          />

          <Label id="birth-date-label" htmlFor="appointment-date">
            Date of Birth
          </Label>
          <DatePicker
            id="birth-date"
            name="Birthday"
            key="hello"
            defaultValue={formatDate(proofingData.dateOfBirth) || ""}
            value={proofingData.dateOfBirth || ""}
            onChange={(date) => dateChangeHandler(date)}
          ></DatePicker>

          <Label htmlFor="mailing-address-1">Street address</Label>
          <TextInput
            id="mailing-address-1"
            name="mailing-address-1"
            type="text"
            value={proofingData.address1}
            onChange={(e) => inputChangeHandler(e, "address1")}
          />
          <Label htmlFor="mailing-address-2">
            Street address line 2 (optional)
          </Label>
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

          <Link href="/proofing/4a-complete-verification">
            <button
              type="button"
              className="usa-button usa-button--full-width margin-y-4"
              disabled={isContinueButtonDisabled}
            >
              Continue
            </button>
          </Link>
          <Link href="/proofing/2-validate-id">
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
  );
}
