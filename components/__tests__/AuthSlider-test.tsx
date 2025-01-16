import { render, screen } from "@testing-library/react-native";
import { AuthSlider } from "..";

jest.mock("react-native-pager-view", () => {
  const { View } = require("react-native");
  return (props: any) => <View {...props} />;
});

describe("OnboardingSlider", () => {
  it("should render the component with correct structure", () => {
    render(<AuthSlider />);
    const container = screen.getByTestId("auth-slider");
    expect(container).toBeTruthy();
  });
});
