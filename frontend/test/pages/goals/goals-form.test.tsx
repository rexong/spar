import React from "react";
import { render, screen } from "@testing-library/react";
import GoalsForm from "../../../src/pages/goals/goals-form";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../src/components/generic-form", () => ({
  __esModule: true,
  default: (props: any) => (
    <div
      data-testid="generic-form-mock"
      {...props}
      initial={props.initial ? JSON.stringify(props.initial) : undefined}
    />
  ),
}));

describe("GoalsForm", () => {
  it("renders GenericForm in create mode with correct props", () => {
    render(
      <MemoryRouter>
        <GoalsForm mode="create" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
    expect(form).toHaveAttribute("title", "Create Goal");
    expect(form).toHaveAttribute("saveLabel", "Save Goal");
  });

  it("renders GenericForm in edit mode with correct props", () => {
    render(
      <MemoryRouter>
        <GoalsForm mode="edit" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("title", "Edit Goal");
  });

  it("passes initial prop to GenericForm in edit mode", () => {
    const initial = { name: "Goal Name", description: "desc" };
    render(
      <MemoryRouter>
        <GoalsForm mode="edit" initial={initial} />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toHaveAttribute("initial", JSON.stringify(initial));
  });
});
