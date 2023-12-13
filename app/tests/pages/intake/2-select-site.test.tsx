import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { initialIntakeData, IntakeContext } from "src/contexts/IntakeContext";
import LocationSelectorScreen from "src/pages/intake/2-select-site/index";

describe("LocationSelectorScreen", () => {
  it("Displays Continue button as disabled", () => {
    render(<LocationSelectorScreen />);

    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeDisabled();
    expect(screen.queryByText("Choose a nearby site")).toBeVisible();
  });
  const setIntakeData = (data: typeof initialIntakeData) => {
    return data;
  };

  it("Displays nearby locations", () => {
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
        <LocationSelectorScreen />
      </IntakeContext.Provider>
    );
    const searchButton = screen.getByTestId("searchField");
    fireEvent.click(searchButton);
    expect(screen.getByText("Baltimore VA Medical Center")).toBeVisible();
    expect(screen.getByText("Loch Raven VA Medical Center")).toBeVisible();
  });

  it("Enables continue button", () => {
    initialIntakeData.location.id = "1234";

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
        <LocationSelectorScreen />
      </IntakeContext.Provider>
    );
    const searchButton = screen.getByTestId("searchField");
    fireEvent.click(searchButton);
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeEnabled();
  });
});
