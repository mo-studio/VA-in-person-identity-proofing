import { render, screen } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import ConfirmEmailPage from "src/pages/proofing/1b-confirm-email";

describe("ConfirmEmailPage", () => {
  render(<ConfirmEmailPage />);
  it("continue button is enabled by default", () => {
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });

  it("should display the case number from the previous page", () => {
    const defaultCaseNumber = "123456789";
    const updatedData = {
      ...initialProofingData,
      caseNumber: defaultCaseNumber,
    };

    const setProofingData = (data: typeof initialProofingData) => {
      return data;
    };

    render(
      <ProofingContext.Provider
        value={{ proofingData: updatedData, setProofingData }}
      >
        <ConfirmEmailPage />
      </ProofingContext.Provider>
    );
    const caseNumber = screen.getByText(`Case Number: ${defaultCaseNumber}`);
    expect(caseNumber).toBeInTheDocument();
  });

  // it should display the email address associated with the case number from the Login.gov payload
  // TODO
});
