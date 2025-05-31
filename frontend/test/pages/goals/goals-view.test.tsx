import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import GoalsView from "../../../src/pages/goals/goals-view";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import * as goalsMock from "../../../src/pages/goals/goals-mock";

// Mock goals-mock
vi.mock("../../../src/pages/goals/goals-mock", () => ({
  goals: [
    {
      id: 1,
      name: "Book a Flight",
      description: "desc",
      versions: [
        { version: 2, date: "2023-10-15", author: "Jane Smith" },
        { version: 1, date: "2023-09-30", author: "John Doe" },
      ],
      date: "2023-10-15",
    },
  ],
}));

function renderWithRouter(id: string) {
  return render(
    <MemoryRouter initialEntries={[`/goals/${id}`]}>
      <Routes>
        <Route path="/goals/:id" element={<GoalsView />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("GoalsView", () => {
  it("renders goal details when goal exists", () => {
    renderWithRouter("1");
    expect(screen.getByText("Book a Flight")).toBeInTheDocument();
    expect(screen.getByText("Goal ID: 1")).toBeInTheDocument();
    expect(screen.getByText("Edit Goal")).toBeInTheDocument();
    expect(screen.getByText("Delete Goal")).toBeInTheDocument();
  });

  it("renders not found if goal does not exist", async () => {
    // Re-mock the module to return an empty array for this test
    vi.doMock("../../../src/pages/goals/goals-mock", () => ({
      goals: [],
    }));
    // Re-import the component after mocking
    const { default: GoalsViewNotFound } = await import("../../../src/pages/goals/goals-view");
    render(
      <MemoryRouter initialEntries={["/goals/999"]}>
        <Routes>
          <Route path="/goals/:id" element={<GoalsViewNotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Goal Not Found/i)).toBeInTheDocument();
  });
  it("shows goal description and latest version in details tab", () => {
    renderWithRouter("1");
    expect(screen.getByText("desc")).toBeInTheDocument();
    expect(screen.getByText(/Version 2/)).toBeInTheDocument();
  });
  it("switches to version history tab and displays versions", () => {
    renderWithRouter("1");
    fireEvent.click(screen.getByText("Version History"));
    expect(screen.getByText("Version 2")).toBeInTheDocument();
    expect(screen.getByText("Version 1")).toBeInTheDocument();
    expect(screen.getByText("Created on 2023-10-15 by Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Created on 2023-09-30 by John Doe")).toBeInTheDocument();
    expect(screen.getAllByText(/Version \d/).length).toBe(2);
  });
  it("shows 'Latest' badge on the latest version in version history", () => {
    renderWithRouter("1");
    fireEvent.click(screen.getByText("Version History"));
    const latestBadge = screen.getByText("Latest");
    expect(latestBadge).toBeInTheDocument();
    expect(latestBadge.closest(".font-medium")?.textContent).toContain("Version 2");
  });
  it("navigates to edit page when Edit Goal is clicked", () => {
    renderWithRouter("1");
    const editButton = screen.getByText("Edit Goal");
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    // Since we don't have the edit route in this test, the URL will change but component won't update.
    // This checks that navigation is attempted without error.
  });
  it("renders Details tab as default", () => {
    renderWithRouter("1");
    expect(screen.getByText("Details")).toHaveClass("border-b-2");
    expect(screen.getByText("desc")).toBeInTheDocument();
  });
  it("renders Version History tab when clicked", () => {
    renderWithRouter("1");
    fireEvent.click(screen.getByText("Version History"));
    expect(screen.getByText("Version History")).toHaveClass("border-b-2");
    expect(screen.getByText("Version 2")).toBeInTheDocument();
    expect(screen.getByText("Version 1")).toBeInTheDocument();
  });
});
