import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UnitValueStepper from "../components/UnitValueStepper";

test("renders UnitValueStepper and handles unit change", () => {
  render(<UnitValueStepper />);

  // Check initial unit
  expect(screen.getByText("Unit")).toBeInTheDocument();
  expect(screen.getByText("%")).toBeInTheDocument();

  // Change unit to 'px'
  fireEvent.click(screen.getByText("px"));
  expect(screen.getByText("px")).toBeInTheDocument();
});

test("handles value change and increment/decrement", () => {
  render(<UnitValueStepper />);

  const input = screen.getByRole("textbox");

  // Initial value
  expect(input.value).toBe("1.0");

  // Increment value
  fireEvent.click(screen.getByText("+"));
  expect(input.value).toBe("2");

  // Decrement value
  fireEvent.click(screen.getByText("−"));
  expect(input.value).toBe("1");
});
