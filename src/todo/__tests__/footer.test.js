import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from 

const mockTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: true },
];

test("Render Test: Footer component renders without errors", () => {
  render(<Footer todos={mockTodos} dispatch={() => {}} />, {
    wrapper: MemoryRouter,
  });
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});

test("Clear Completed Test: Clear completed button works correctly", () => {
  const mockDispatch = jest.fn();
  render(<Footer todos={mockTodos} dispatch={mockDispatch} />, {
    wrapper: MemoryRouter,
  });

  const clearCompletedButton = screen.getByText("Clear completed");
  fireEvent.click(clearCompletedButton);

  expect(mockDispatch).toHaveBeenCalledWith({ type: "REMOVE_COMPLETED_ITEMS" });
});
