import { render, screen } from "@testing-library/react";
import CaseNumberScreen from "src/pages/intake/4-verify-in-person/index";

describe("CaseNumberScreen", () => {
  it("Displays Continue button and important screen content", () => {
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
