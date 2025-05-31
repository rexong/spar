import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EvaluatorsList from "../../../src/pages/evaluators/evaluators-list";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<any>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock evaluators-mock
vi.mock("../../../src/pages/evaluators/evaluators-mock", () => ({
  evaluators: [
    {
      id: 1,
      name: "Relevance Quality Evaluator",
      versions: [1, 2],
      date: "2023-10-15",
    },
    {
      id: 2,
      name: "Empathy Analyzer",
      versions: [1],
      date: "2023-10-12",
    },
  ],
}));

describe("EvaluatorsList", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders evaluators list and UI elements", () => {
    render(
      <MemoryRouter>
        <EvaluatorsList />
      </MemoryRouter>
    );
    expect(screen.getByText("Evaluators")).toBeInTheDocument();
    expect(screen.getByText("Relevance Quality Evaluator")).toBeInTheDocument();
    expect(screen.getByText("Empathy Analyzer")).toBeInTheDocument();
    expect(screen.getByText("Configure and manage LLM-based evaluation systems")).toBeInTheDocument();
    expect(screen.getByText("New Evaluator")).toBeInTheDocument();
  });

  it("navigates to create page when New Evaluator button is clicked", () => {
    render(
      <MemoryRouter>
        <EvaluatorsList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("New Evaluator"));
    expect(mockNavigate).toHaveBeenCalledWith("/evaluators/create");
  });

  it("navigates to evaluator detail when evaluator name is clicked", () => {
    render(
      <MemoryRouter>
        <EvaluatorsList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Relevance Quality Evaluator"));
    expect(mockNavigate).toHaveBeenCalledWith("/evaluators/1");
    fireEvent.click(screen.getByText("Empathy Analyzer"));
    expect(mockNavigate).toHaveBeenCalledWith("/evaluators/2");
  });
});
