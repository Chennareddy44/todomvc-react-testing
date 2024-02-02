import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

test("Render Test: Header component renders without errors", () => {
  render(<Header dispatch={() => {}} />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
});

test("Add Item Test: Adding a new item through the input", () => {
  const mockDispatch = jest.fn();
  render(<Header dispatch={mockDispatch} />);

  const input = screen.getByTestId("text-input");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "ADD_ITEM",
    payload: { title: "New Todo" },
  });
});
