import { render, screen } from "@testing-library/react-native";
import LoginScreen from "@/app/login";

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
    render(<LoginScreen />);
    const onboardingScreen = screen.getByTestId("login-screen");
    expect(onboardingScreen).toBeTruthy();
  });
});
