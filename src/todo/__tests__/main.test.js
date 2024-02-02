import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Main } from "./main";

const mockTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: true },
];

test("Render Test: Main component renders without errors", () => {
  render(<Main todos={mockTodos} dispatch={() => {}} />, {
    wrapper: MemoryRouter,
  });
  expect(screen.getByTestId("main")).toBeInTheDocument();
});

test("Toggle All Test: Toggle all checkbox works correctly", () => {
  const mockDispatch = jest.fn();
  render(<Main todos={mockTodos} dispatch={mockDispatch} />, {
    wrapper: MemoryRouter,
  });

  const toggleAllCheckbox = screen.getByTestId("toggle-all");
  fireEvent.click(toggleAllCheckbox);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "TOGGLE_ALL",
    payload: { completed: true },
  });
});
