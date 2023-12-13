import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Intake from "src/pages/intake/1-home/index";

describe("Intake", () => {
  it("Displays Continue button and Accordion", () => {
    render(<Intake />);

    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
    expect(
      screen.queryByText(
        "If you decide not to verify your identity in person, you may close this window at any time."
      )
    ).toBeVisible();
  });

  test("toggles accordion content visibility", () => {
    render(<Intake />);
    const section1TitleElement = screen.getByText(/State-Issued ID or VHIC/i);
    const section1ContentElement = screen.queryByText(
      /At this time, the following forms of identification are accepted:/i
    );
    expect(section1ContentElement).not.toBeVisible();
    fireEvent.click(section1TitleElement);
    expect(section1ContentElement).toBeVisible();
    fireEvent.click(section1TitleElement);
    expect(section1ContentElement).not.toBeVisible();
  });

  test("toggles accordion content visibility", () => {
    render(<Intake />);
    const section1TitleElement = screen.getByText("Proof of Address");
    const section1ContentElement = screen.queryByText(
      /If you present a VHIC, you must also provide additional documentation of proof of address in the form of a utility bill or bank statement./i
    );
    fireEvent.click(section1TitleElement);
    expect(section1ContentElement).toBeVisible();
  });

  test("toggles accordion content visibility", () => {
    render(<Intake />);
    const section1TitleElement = screen.getByText("Social Security Number");
    const section1ContentElement = screen.queryByText(
      /You will need to provide VA staff with your Social Security Number so that they may verify your identity. You do not need to bring your physical Social Security card./i
    );
    fireEvent.click(section1TitleElement);
    expect(section1ContentElement).toBeVisible();
  });

  test("Confirmation Case Number", () => {
    render(<Intake />);
    const section1TitleElement = screen.getByText("Confirmation Case Number");
    const section1ContentElement = screen.queryByText(
      /Once you complete the steps here to register for In-Person Identity proofing, a confirmation case number will be created and emailed to you. This case number will be valid for 10 days. You will need to share it when you come in-person to verify your identity at a VA Medical Center. You can write your case number down, print the email, or show it from your mobile device. If you go to a VA Medical Center after the 10 days have passed, the case number will no longer be valid and you will need to sign in to your Login.gov account and repeat the process to register for In-Person Identity Proofing again./i
    );
    fireEvent.click(section1TitleElement);
    expect(section1ContentElement).toBeVisible();
  });
});
