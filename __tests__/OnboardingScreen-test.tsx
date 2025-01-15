import { render, screen } from "@testing-library/react-native";
import OnboardingScreen from "@/app/onboarding";

describe("", () => {
  it("Render the onboarding screen", () => {
    render(<OnboardingScreen />);
    const onboardingScreen = screen.getByTestId("onboarding-screen");
    expect(onboardingScreen).toBeTruthy();
  });
});
