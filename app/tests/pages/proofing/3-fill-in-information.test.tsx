import { render, screen } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import FillInInformation from "src/pages/proofing/3-fill-in-information";

describe("FillInInformation", () => {
  test("continue button is disabled by default", () => {
    render(<FillInInformation />);
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeDisabled();
  });

  test("continue button is enabled when all required fields are filled in", () => {
    const filledData = {
      ...initialProofingData,
      socialSecurityNumber: "123456789",
      firstName: "John",
      lastName: "Doe",
      idType: "VHIC",
      idNumber: "000000",
      dateOfBirth: "2020-01-01",
      address1: "123 Main St",
      city: "Anytown",
      stateName: "CA",
      zipCode: "12345",
    };
    const setProofingData = (data: typeof initialProofingData) => {
      return data;
    };
    render(
      <ProofingContext.Provider
        value={{
          proofingData: filledData,
          setProofingData,
        }}
      >
        <FillInInformation />
      </ProofingContext.Provider>
    );
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });
});
