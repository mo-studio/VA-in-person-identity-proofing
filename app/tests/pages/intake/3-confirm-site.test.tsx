import { render, screen } from "@testing-library/react";
import { initialIntakeData, IntakeContext } from "src/contexts/IntakeContext";
import LocationConfirmationScreen from "src/pages/intake/3-confirm-site/index";

describe("LocationConfirmationScreen", () => {
  it("Displays Continue button and other screen content", () => {
    render(<LocationConfirmationScreen />);

    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
    expect(screen.queryByText("Confirm your selection")).toBeVisible();
    expect(
      screen.queryByText("You have chosen to verify at the following location:")
    ).toBeVisible();
  });

  const setIntakeData = (data: typeof initialIntakeData) => {
    return data;
  };

  it("Displays address selected", () => {
    initialIntakeData.location.attributes.address.physical.address1 =
      "123 shadow lane";
    initialIntakeData.location.attributes.address.physical.city = "Riverdale";
    initialIntakeData.location.attributes.address.physical.state = "TST";
    initialIntakeData.location.attributes.address.physical.zip = "12345";

    render(
      <IntakeContext.Provider
        value={{
          intakeData: {
            ...initialIntakeData,
            isSiteSelected: true,
          },
          setIntakeData,
        }}
      >
        <LocationConfirmationScreen />
      </IntakeContext.Provider>
    );
    expect(screen.queryByText(/123 shadow lane/)).toBeVisible();
    expect(screen.queryByText(/Riverdale/)).toBeVisible();
  });
});
