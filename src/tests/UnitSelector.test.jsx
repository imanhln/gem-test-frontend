import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UnitSelector from "../components/UnitSelector";

test("renders unit buttons and handles unit change", () => {
  const mockOnUnitChange = jest.fn();
  render(<UnitSelector unit="%" onUnitChange={mockOnUnitChange} />);

  // Check if both buttons are rendered
  expect(screen.getByText("%")).toBeInTheDocument();
  expect(screen.getByText("px")).toBeInTheDocument();

  // Click the px button
  fireEvent.click(screen.getByText("px"));
  expect(mockOnUnitChange).toHaveBeenCalledWith("px");
});
