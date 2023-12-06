import { render, screen } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import CompleteVerification from "src/pages/proofing/4a-complete-verification";

describe("CompleteVerification", () => {
  test("continue button is disabled by default", () => {
    render(<CompleteVerification />);
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeDisabled();
  });

  test("applicant summary populated with data from previous page", () => {
    const filledData = {
      ...initialProofingData,
      socialSecurityNumber: "123456789",
      firstName: "John",
      lastName: "Doe",
      idType: "VHIC",
      idNumber: "000000",
      dateOfBirth: "1/1/20",
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
        <CompleteVerification />
      </ProofingContext.Provider>
    );
    const applicantSummary = screen.getByText("123 Main St, Anytown, CA 12345");
    expect(applicantSummary).toBeInTheDocument();

    // Test to make sure the continue button is enabled when there is an ICN and verified IAM boolean
  });

  test("continue button is enabled when there is an ICN and verified IAM boolean", () => {
    const filledData = {
      ...initialProofingData,
      icn: "12345678901234567",
      isIamToolkitVerified: true,
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
        <CompleteVerification />
      </ProofingContext.Provider>
    );
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });
});
