import { render, screen } from "@testing-library/react";
import ConfirmEmailPage from "src/pages/proofing/1b-confirm-email";

describe("ConfirmEmailPage", () => {
  render(<ConfirmEmailPage />);
  it("continue button is enabled by default", () => {
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });
});
