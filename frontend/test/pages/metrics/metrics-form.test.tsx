import React from "react";
import { render, screen } from "@testing-library/react";
import MetricsForm from "../../../src/pages/metrics/metrics-form";
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

describe("MetricsForm", () => {
  it("renders GenericForm in create mode with correct props", () => {
    render(
      <MemoryRouter>
        <MetricsForm mode="create" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
    expect(form).toHaveAttribute("title", "Create New Metric");
    expect(form).toHaveAttribute("saveLabel", "Save Metric");
  });

  it("renders GenericForm in edit mode with correct props", () => {
    render(
      <MemoryRouter>
        <MetricsForm mode="edit" />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
    expect(form).toHaveAttribute("title", "Edit Metric");
  });

  it("passes initial prop to GenericForm in edit mode", () => {
    const initial = { name: "Test Metric", description: "desc" };
    render(
      <MemoryRouter>
        <MetricsForm mode="edit" initial={initial} />
      </MemoryRouter>
    );
    const form = screen.getByTestId("generic-form-mock");
    expect(form).toHaveAttribute("initial", JSON.stringify(initial));
  });
});
