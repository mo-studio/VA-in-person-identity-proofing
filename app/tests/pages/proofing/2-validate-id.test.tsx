import { render, screen } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import ValidateId from "src/pages/proofing/2-validate-id";

import React from "react";

describe("ValidateId", () => {
  it("continue button is disabled by default", () => {
    render(<ValidateId />);
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeDisabled();
  });

  const setProofingData = (data: typeof initialProofingData) => {
    return data;
  };

  it("prompts you to select an ID type if you skip that accordion", () => {
    render(
      <ProofingContext.Provider
        value={{
          proofingData: initialProofingData,
          setProofingData,
        }}
      >
        <ValidateId />
      </ProofingContext.Provider>
    );
    const caseNumber = screen.getByText(`Select an ID Type above.`);
    expect(caseNumber).toBeInTheDocument();
  });

  it("continue button is disabled when validated boolean is false", () => {
    render(
      <ProofingContext.Provider
        value={{
          proofingData: {
            ...initialProofingData,
            idType: "VHIC",
          },
          setProofingData,
        }}
      >
        <ValidateId />
      </ProofingContext.Provider>
    );
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeDisabled();
  });

  it("continue button is enabled when both ID Type and Validated are changed", () => {
    render(
      <ProofingContext.Provider
        value={{
          proofingData: {
            ...initialProofingData,
            idType: "VHIC",
            isDocumentValidated: true,
          },
          setProofingData,
        }}
      >
        <ValidateId />
      </ProofingContext.Provider>
    );
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });

  // Add more tests here
});
