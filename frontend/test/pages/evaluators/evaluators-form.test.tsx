import React from "react";
import { render, screen } from "@testing-library/react";
import EvaluatorsForm from "../../../src/pages/evaluators/evaluators-form";
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

describe("EvaluatorsForm", () => {
  it("renders GenericForm in create mode with correct props", () => {
    render(
      <MemoryRouter>
        <EvaluatorsForm mode="create" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
    expect(form).toHaveAttribute("title", "Create LLM Evaluator");
    expect(form).toHaveAttribute("saveLabel", "Create Evaluator");
  });

  it("renders GenericForm in edit mode with correct props", () => {
    render(
      <MemoryRouter>
        <EvaluatorsForm mode="edit" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("title", "Edit LLM Evaluator");
    expect(form).toHaveAttribute("saveLabel", "Save Evaluator");
  });

  it("passes initial prop to GenericForm in edit mode", () => {
    const initial = { name: "Test Evaluator", description: "desc" };
    render(
      <MemoryRouter>
        <EvaluatorsForm mode="edit" initial={initial} />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("initial", JSON.stringify(initial));
  });
});
