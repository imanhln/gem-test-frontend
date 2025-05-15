import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ValueStepper from "../components/ValueStepper";

test("renders value stepper and handles increment/decrement", () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();
  const mockOnIncrement = jest.fn();
  const mockOnDecrement = jest.fn();

  render(
    <ValueStepper
      value="50"
      unit="%"
      onChange={mockOnChange}
      onBlur={mockOnBlur}
      onIncrement={mockOnIncrement}
      onDecrement={mockOnDecrement}
      inputRef={null}
    />
  );

  const decrementButton = screen.getByText("−");
  const incrementButton = screen.getByText("+");
  const input = screen.getByRole("textbox");

  // Check initial value
  expect(input.value).toBe("50");

  // Click increment button
  fireEvent.click(incrementButton);
  expect(mockOnIncrement).toHaveBeenCalled();

  // Click decrement button
  fireEvent.click(decrementButton);
  expect(mockOnDecrement).toHaveBeenCalled();
});
