import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GoalsCreate from "../../../src/pages/goals/goals-create";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock the actual import path used in GoalsCreate
vi.mock("../../../src/pages/goals/goals-form", () => ({
  default: (props: any) => <div data-testid="goals-form-mock" {...props} />,
}));

describe("GoalsCreate", () => {
  it("renders GoalsForm in create mode", () => {
    render(
      <MemoryRouter>
        <GoalsCreate />
      </MemoryRouter>
    );
    const form = screen.getByTestId("goals-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
  });
});
