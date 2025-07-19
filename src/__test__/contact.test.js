import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("check contact page loading", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("weather button is there or not", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should load two input box", async () => {
  render(<Contact />);
  const inputs = await screen.getAllByRole("textbox");
  expect(inputs.length).toBe(2);
});
