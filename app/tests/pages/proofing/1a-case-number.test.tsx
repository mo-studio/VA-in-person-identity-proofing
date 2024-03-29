import { render, screen } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import CaseNumberPage from "src/pages/proofing/1a-case-number/index";

describe("CaseNumberPage", () => {
  it("continue button is disabled by default", () => {
    const setProofingData = (data: typeof initialProofingData) => {
      return data;
    };
    render(
      <ProofingContext.Provider
        value={{ proofingData: initialProofingData, setProofingData }}
      >
        <CaseNumberPage />
      </ProofingContext.Provider>
    );
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeDisabled();
  });

  it("continue button is enabled when case number is entered", () => {
    const updatedData = { ...initialProofingData, caseNumber: "12345678" };
    const setProofingData = (data: typeof initialProofingData) => {
      return data;
    };
    render(
      <ProofingContext.Provider
        value={{ proofingData: updatedData, setProofingData }}
      >
        <CaseNumberPage />
      </ProofingContext.Provider>
    );

    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });
});
