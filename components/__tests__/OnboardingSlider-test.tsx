import { render, screen } from "@testing-library/react-native";
import { OnboardingSlider } from "..";
import { onboardingSliderType } from "@/constants/types";

const mockProps: onboardingSliderType = {
  image: "@/assets/images/welcome-slider01.svg",
  title: "Welcome to the App",
};

describe("OnboardingSlider", () => {
  it("should render the component with correct structure", () => {
    render(<OnboardingSlider {...mockProps} />);
    const container = screen.getByTestId("onboarding-slider");
    expect(container).toBeTruthy();
  });
});
