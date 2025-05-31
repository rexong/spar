import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EvaluatorsCreate from "../../../src/pages/evaluators/evaluators-create";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock the actual import path used in EvaluatorsCreate
vi.mock("../../../src/pages/evaluators/evaluators-form", () => ({
  default: (props: any) => <div data-testid="evaluators-form-mock" {...props} />, 
}));

describe("EvaluatorsCreate", () => {
  it("renders EvaluatorsForm in create mode", () => {
    render(
      <MemoryRouter>
        <EvaluatorsCreate />
      </MemoryRouter>
    );
    const form = screen.getByTestId("evaluators-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
  });
});
