import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import GoalsEdit from "../../../src/pages/goals/goals-edit";
import "@testing-library/jest-dom";

// Mock the actual import path used in GoalsEdit
vi.mock("../../../src/pages/goals/goals-form", () => ({
  default: (props: any) => <div data-testid="goals-form-mock" {...props} />,
}));

// Mock goals-mock
vi.mock("../../../src/pages/goals/goals-mock", () => ({
  goals: [
    { id: 1, name: "Book a Flight", description: "desc" },
  ],
}));

describe("GoalsEdit", () => {
  it("renders GoalsForm in edit mode with initial data", () => {
    render(
      <MemoryRouter initialEntries={["/goals/1"]}>
        <Routes>
          <Route path="/goals/:id" element={<GoalsEdit />} />
        </Routes>
      </MemoryRouter>
    );
    const form = screen.getByTestId("goals-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("initial");
  });

  it("renders not found if goal does not exist", async () => {
    vi.doMock("../../../src/pages/goals/goals-mock", () => ({
      goals: [],
    }));
    const { default: GoalsEditNotFound } = await import("../../../src/pages/goals/goals-edit");
    render(
      <MemoryRouter initialEntries={["/goals/999"]}>
        <Routes>
          <Route path="/goals/:id" element={<GoalsEditNotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Goal not found/i)).toBeInTheDocument();
  });
});
