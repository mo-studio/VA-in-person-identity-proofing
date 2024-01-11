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

  it("displays a State ID Type dropdown if Driver's License is Selected", () => {
    render(
      <ProofingContext.Provider
        value={{
          proofingData: {
            ...initialProofingData,
            idType: "State-issued Driver's License",
          },
          setProofingData,
        }}
      >
        <ValidateId />
      </ProofingContext.Provider>
    );
    expect(screen.queryAllByText(`State`)).toHaveLength(1);
    expect(screen.queryAllByText("Maryland")).toHaveLength(1);
  });

  it("displays a State ID Type dropdown if State-issued ID is Selected", () => {
    render(
      <ProofingContext.Provider
        value={{
          proofingData: {
            ...initialProofingData,
            idType: "State-issued Identification Card",
          },
          setProofingData,
        }}
      >
        <ValidateId />
      </ProofingContext.Provider>
    );
    expect(screen.queryAllByText(`State`)).toHaveLength(1);
  });

  it("doesn't display a State ID Type dropdown if VHIC", () => {
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
    expect(screen.queryAllByText(`State`)).toHaveLength(0);
  });

  it("displays a second dropdown for State of ID Type if Driver's License is Selected below in validate document section", () => {
    render(
      <ProofingContext.Provider
        value={{
          proofingData: {
            ...initialProofingData,
            idType: "State-issued Driver's License",
            idTypeState: "MD",
          },
          setProofingData,
        }}
      >
        <ValidateId />
      </ProofingContext.Provider>
    );

    expect(screen.queryAllByText("State")).toHaveLength(1);
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
