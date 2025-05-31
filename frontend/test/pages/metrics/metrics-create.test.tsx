import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MetricsCreate from "../../../src/pages/metrics/metrics-create";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock the actual import path used in MetricsCreate
vi.mock("../../../src/pages/metrics/metrics-form", () => ({
  default: (props: any) => <div data-testid="metrics-form-mock" {...props} />,
}));

describe("MetricsCreate", () => {
  it("renders MetricsForm in create mode", () => {
    render(
      <MemoryRouter>
        <MetricsCreate />
      </MemoryRouter>
    );
    const form = screen.getByTestId("metrics-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
  });
});
