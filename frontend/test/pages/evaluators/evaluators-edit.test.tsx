import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import EvaluatorsEdit from "../../../src/pages/evaluators/evaluators-edit";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock evaluators-mock
vi.mock("../../../src/pages/evaluators/evaluators-mock", () => ({
  evaluators: [
    {
      id: 1,
      name: "Relevance Quality Evaluator",
      description: "Evaluates the overall quality and relevance of chatbot responses.",
      prompt: "Evaluate the chatbot's response for relevance and quality.",
      temperature: 0.7,
      versions: [
        { version: 2, date: "2023-10-15", author: "Jane Smith" },
        { version: 1, date: "2023-09-30", author: "John Doe" },
      ],
      date: "2023-10-15",
    },
  ],
}));

// Mock EvaluatorsForm
vi.mock("../../../src/pages/evaluators/evaluators-form", () => ({
  default: (props: any) => (
    <div
      data-testid="evaluators-form-mock"
      data-mode={props.mode}
      data-initial={typeof props.initial === 'object' ? JSON.stringify(props.initial) : props.initial}
      {...props}
    />
  ),
}));

describe("EvaluatorsEdit", () => {
  it("renders EvaluatorsForm in edit mode with initial data", () => {
    render(
      <MemoryRouter initialEntries={["/evaluators/edit/1"]}>
        <Routes>
          <Route path="/evaluators/edit/:id" element={<EvaluatorsEdit />} />
        </Routes>
      </MemoryRouter>
    );
    const form = screen.getByTestId("evaluators-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("data-mode", "edit");
    expect(form.getAttribute("data-initial")).toEqual(
      expect.stringContaining("Relevance Quality Evaluator")
    );
  });
});
