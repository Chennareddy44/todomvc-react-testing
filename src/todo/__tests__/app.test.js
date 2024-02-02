import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App.js";

test("Render Test: App component renders without errors", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("main")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});
