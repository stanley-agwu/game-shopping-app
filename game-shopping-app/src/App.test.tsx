import App from "./App";
import { render, screen } from "@/tests/test-utils";

describe("App", () => {
  it('renders App', async() => {
    render(<App />);

    expect(await screen.findByText('Game shop')).toBeInTheDocument();
  })
})