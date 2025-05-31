import React from "react";
import { render, screen } from "@testing-library/react";
import PersonasForm from "../../../src/pages/personas/personas-form";
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

describe("PersonasForm", () => {
  it("renders GenericForm in create mode with correct props", () => {
    render(
      <MemoryRouter>
        <PersonasForm mode="create" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
    expect(form).toHaveAttribute("title", "Create Persona");
    expect(form).toHaveAttribute("saveLabel", "Save Persona");
  });

  it("renders GenericForm in edit mode with correct props", () => {
    render(
      <MemoryRouter>
        <PersonasForm mode="edit" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("title", "Edit Persona");
  });

  it("passes initial prop to GenericForm in edit mode", () => {
    const initial = { name: "John Doe", description: "A sample persona" };
    render(
      <MemoryRouter>
        <PersonasForm mode="edit" initial={initial} />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("initial", JSON.stringify(initial));
  });
});