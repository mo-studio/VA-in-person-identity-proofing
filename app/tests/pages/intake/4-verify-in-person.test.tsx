import { render, screen } from "@testing-library/react";
import { ProofingContext } from "src/contexts/ProofingContext";
import { initialProofingData } from "src/data/proofingData";
import CaseNumberScreen from "src/pages/intake/4-verify-in-person/index";

describe("Intake", () => {
  it("Displays Continue button", () => {
    render(<CaseNumberScreen />);

    expect(screen.queryByText("Verify In Person")).toBeVisible();
    expect(
      screen.queryByText(
        "For your In-Person Identity Proofing walk-in appointment, please bring the following items:"
      )
    ).toBeVisible();
    expect(screen.queryByText("Your case number")).toBeVisible();
    expect(
      screen.queryByText(
        "A copy of your case number and instructions on what to bring to the verification site you selected have been emailed to the address you provided."
      )
    ).toBeVisible();
  });
});
