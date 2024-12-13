import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders with primary variant by default", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
  });

  test("renders with secondary variant", () => {
    render(<Button variant="secondary">Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass("secondary");
  });

  test("renders with destructive variant", () => {
    render(<Button variant="destructive">Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass("destructive");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
