import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PersonasCreate from "../../../src/pages/personas/personas-create";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock the actual import path used in PersonasCreate
vi.mock("../../../src/pages/personas/personas-form", () => ({
  default: (props: any) => <div data-testid="personas-form-mock" {...props} />,
}));

describe("PersonasCreate", () => {
  it("renders PersonasForm in create mode", () => {
    render(
      <MemoryRouter>
        <PersonasCreate />
      </MemoryRouter>
    );
    const form = screen.getByTestId("personas-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "create");
  });

});