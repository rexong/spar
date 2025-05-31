import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PersonasView from "../../../src/pages/personas/personas-view";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock personas-mock
vi.mock("../../../src/pages/personas/personas-mock", () => ({
  personas: [
    {
      id: "1",
      name: "Persona One",
      description: "Description of Persona One",
      versions: [
        { version: 2, date: "2024-02-01", author: "Alice" },
        { version: 1, date: "2024-01-01", author: "Bob" },
      ],
      goals: ["Goal1", "Goal2"],
      date: "2024-02-01",
      attributes: [
        { label: "Role", value: "Manager" },
        { label: "Seniority", value: "Senior" },
      ],
    },
  ],
}));

function renderWithRouter(id: string) {
  return render(
    <MemoryRouter initialEntries={[`/personas/${id}`]}>
      <Routes>
        <Route path="/personas/:id" element={<PersonasView />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("PersonasView", () => {
  it("renders persona details when persona exists", () => {
    renderWithRouter("1");
    expect(screen.getByText("Persona One")).toBeInTheDocument();
    expect(screen.getByText("Persona ID: 1")).toBeInTheDocument();
    expect(screen.getByText("Description of Persona One")).toBeInTheDocument();
    expect(screen.getByText("Role")).toBeInTheDocument();
    expect(screen.getByText("Manager")).toBeInTheDocument();
    expect(screen.getByText("Seniority")).toBeInTheDocument();
    expect(screen.getByText("Senior")).toBeInTheDocument();
    expect(screen.getByText("Edit Persona")).toBeInTheDocument();
    expect(screen.getByText("Delete Persona")).toBeInTheDocument();
  });

  it("shows 'Persona Not Found' if persona does not exist", () => {
    renderWithRouter("999");
    expect(screen.getByText("Persona Not Found")).toBeInTheDocument();
  });

  it("switches tabs and displays correct content", () => {
    renderWithRouter("1");

    // Details tab is default
    expect(screen.getByText("Description of Persona One")).toBeInTheDocument();

    // Switch to Version History
    fireEvent.click(screen.getByText("Version History"));
    expect(screen.getByText("Version 2")).toBeInTheDocument();
    expect(screen.getByText("Created on 2024-02-01 by Alice")).toBeInTheDocument();
    expect(screen.getByText("Version 1")).toBeInTheDocument();
    expect(screen.getByText("Created on 2024-01-01 by Bob")).toBeInTheDocument();

    // Switch to Associated Goals
    fireEvent.click(screen.getByText("Associated Goals"));
    expect(screen.getByText("Goal1")).toBeInTheDocument();
    expect(screen.getByText("Goal2")).toBeInTheDocument();
    expect(screen.getByText("Associate New Goal")).toBeInTheDocument();
  });
});