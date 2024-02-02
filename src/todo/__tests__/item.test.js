import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Item } from "./Item";

const mockTodo = { id: 1, title: "Mock Todo", completed: false };

test("Render Test: Item component renders without errors", () => {
  const mockDispatch = jest.fn();
  render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);
  expect(screen.getByTestId("todo-item")).toBeInTheDocument();
});

test("Toggle Item Test: Toggle checkbox works correctly", () => {
  const mockDispatch = jest.fn();
  render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);

  const toggleCheckbox = screen.getByTestId("todo-item-toggle");
  fireEvent.click(toggleCheckbox);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "TOGGLE_ITEM",
    payload: { id: 1 },
  });
});

test("Remove Item Test: Remove button works correctly", () => {
  const mockDispatch = jest.fn();
  render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);

  const removeButton = screen.getByTestId("todo-item-button");
  fireEvent.click(removeButton);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "REMOVE_ITEM",
    payload: { id: 1 },
  });
});
