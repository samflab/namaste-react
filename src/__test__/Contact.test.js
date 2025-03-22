import { render, screen } from "@testing-library/react";
import Contact from "../Body/Contact";
import "@testing-library/jest-dom";

test("should load contact page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // assertion
  expect(heading).toBeInTheDocument();
});
