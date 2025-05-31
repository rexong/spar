import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import PersonasEdit from "../../../src/pages/personas/personas-edit";
import "@testing-library/jest-dom";

// Mock the actual import path used in PersonasEdit
vi.mock("../../../src/pages/personas/personas-form", () => ({
  default: (props: any) => <div data-testid="personas-form-mock" {...props} />,
}));

describe("PersonasEdit", () => {
  it("renders PersonasForm in edit mode", () => {
    render(
      <MemoryRouter>
        <PersonasEdit />
      </MemoryRouter>
    );
    const form = screen.getByTestId("personas-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
  });
});