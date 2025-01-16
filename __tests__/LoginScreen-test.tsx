import { render, screen } from "@testing-library/react-native";
import LoginScreen from "@/app/login";

describe("", () => {
  it("Render the onboarding screen", () => {
    render(<LoginScreen />);
    const onboardingScreen = screen.getByTestId("onboarding-screen");
    expect(onboardingScreen).toBeTruthy();
  });
});
