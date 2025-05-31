import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import EvaluatorsView from "../../../src/pages/evaluators/evaluators-view";
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

describe("EvaluatorsView", () => {
  function renderWithRouter(id: string) {
    return render(
      <MemoryRouter initialEntries={[`/evaluators/${id}`]}>
        <Routes>
          <Route path="/evaluators/:id" element={<EvaluatorsView />} />
        </Routes>
      </MemoryRouter>
    );
  }

  it("renders evaluator details when evaluator exists", () => {
    renderWithRouter("1");
    expect(screen.getByText("Relevance Quality Evaluator")).toBeInTheDocument();
    expect(screen.getByText("Evaluator Details")).toBeInTheDocument();
    expect(screen.getByText(/Evaluator ID: 1/)).toBeInTheDocument();
    expect(screen.getByText("Evaluates the overall quality and relevance of chatbot responses.")).toBeInTheDocument();
    expect(screen.getByText("Prompt:")).toBeInTheDocument();
    expect(screen.getByText("Temperature:")).toBeInTheDocument();
    // Version info is only rendered in the Version History tab
    fireEvent.click(screen.getByText("Version History"));
    expect(screen.getByText("Version 2")).toBeInTheDocument();
    const version2Info = screen.getByTestId("version-info-2");
    expect(version2Info).toHaveTextContent("Created on 2023-10-15 by Jane Smith");
  });

  it("shows 'Evaluator Not Found' if evaluator does not exist", () => {
    renderWithRouter("999");
    expect(screen.getByText("Evaluator Not Found")).toBeInTheDocument();
  });

  it("switches tabs and displays correct content", () => {
    renderWithRouter("1");
    // Details tab is default
    expect(screen.getByText("Prompt:")).toBeInTheDocument();
    // Switch to Version History
    fireEvent.click(screen.getByText("Version History"));
    expect(screen.getByText("Version 2")).toBeInTheDocument();
    expect(screen.getByTestId("version-info-2")).toHaveTextContent("Created on 2023-10-15 by Jane Smith");
    expect(screen.getByText("Version 1")).toBeInTheDocument();
    expect(screen.getByTestId("version-info-1")).toHaveTextContent("Created on 2023-09-30 by John Doe");
  });

  it("shows the latest badge only for the latest version", () => {
    renderWithRouter("1");
    fireEvent.click(screen.getByText("Version History"));
    const latestBadge = screen.getByText("Latest");
    expect(latestBadge).toBeInTheDocument();
    // The latest badge should be next to Version 2, not Version 1
    const version2 = screen.getByText("Version 2");
    expect(version2.parentElement).toContainElement(latestBadge);
    const version1 = screen.getByText("Version 1");
    expect(version1.parentElement?.textContent).not.toContain("Latest");
  });

  it("renders edit path prop correctly (editPath is present)", () => {
    renderWithRouter("1");
    // The editPath is passed to GenericView, but not rendered directly.
    // We can only check that the component renders without crashing.
    expect(screen.getByText("Relevance Quality Evaluator")).toBeInTheDocument();
  });

  it("renders buttons for each version in Version History tab", () => {
    renderWithRouter("1");
    fireEvent.click(screen.getByText("Version History"));
    // There should be two sets of buttons (delete and view) for two versions
    const deleteButtons = screen.getAllByText("🗑️");
    const viewButtons = screen.getAllByText("👁️");
    expect(deleteButtons.length).toBe(2);
    expect(viewButtons.length).toBe(2);
  });

  it("does not render details if evaluator is not found", () => {
    renderWithRouter("999");
    expect(screen.queryByText("Prompt:")).not.toBeInTheDocument();
    expect(screen.queryByText("Temperature:")).not.toBeInTheDocument();
  });
});
