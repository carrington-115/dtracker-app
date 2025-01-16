import { render, screen } from "@testing-library/react-native";
import OnboardingScreen from "@/app/onboarding";

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  useFonts: () => [true], // Simulate that fonts are loaded
}));

jest.mock("@expo/vector-icons/AntDesign", () => "AntDesign");
jest.mock(
  "@expo/vector-icons/MaterialCommunityIcons",
  () => "MaterialCommunityIcons"
);
jest.mock("@expo/vector-icons/FontAwesome", () => "FontAwesome");

describe("", () => {
  it("Render the onboarding screen", () => {
    render(<OnboardingScreen />);
    const onboardingScreen = screen.getByTestId("onboarding-screen");
    expect(onboardingScreen).toBeTruthy();
  });
});
