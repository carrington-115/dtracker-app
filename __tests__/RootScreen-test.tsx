import { render, screen } from "@testing-library/react-native";
import HomeScreen from "@/app/(user)/index";

describe("", () => {
  it("Render the loading indicator initially", () => {
    render(<HomeScreen />);
    const loader = screen.getByTestId("loading-indicator");
    expect(loader).toBeTruthy();
  });
});
