import { render, screen, within } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import VerificationTaskClosed from "src/pages/proofing/4b-verification-task-closed";

describe("CompleteVerification", () => {
  test("case number is displayed with completed task", () => {
    const setProofingData = (data: typeof initialProofingData) => {
      return data;
    };
    render(
      <ProofingContext.Provider
        value={{
          proofingData: { ...initialProofingData, caseNumber: "123456789" },
          setProofingData,
        }}
      >
        <VerificationTaskClosed />
      </ProofingContext.Provider>
    );
    const taskClosed = screen.getByTestId("taskClosed");
    expect(taskClosed).toHaveTextContent(
      "You have completed all of the steps of In-Person Identity Proofing for Case Number 123456789."
    );
  });
});
