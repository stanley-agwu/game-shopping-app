import App from "./App";
import { render } from "@/tests/test-utils";

describe("App", () => {
  it('renders App', async() => {
    const component = render(<App />);

    expect(component).toBeDefined();
  })
})