import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Index from "src/pages/index";

describe("Index", () => {
  // Demonstration of rendering translated text, and asserting the presence of a dynamic value.
  // You can delete this test for your own project.
  it("passes accessibility scan", async () => {
    const { container } = render(<Index />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
