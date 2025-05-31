import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PersonasList from "../../../src/pages/personas/personas-list";
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

// Mock personas-mock
vi.mock("../../../src/pages/personas/personas-mock", () => ({
  personas: [
    {
      id: "1",
      name: "Persona One",
      versions: [1, 2],
      goals: ["Goal1"],
      date: "2024-01-01",
    },
    {
      id: "2",
      name: "Persona Two",
      versions: [1],
      goals: ["Goal1", "Goal2"],
      date: "2024-02-01",
    },
  ],
}));

describe("PersonasList", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders personas list and UI elements", () => {
    render(
      <MemoryRouter>
        <PersonasList />
      </MemoryRouter>
    );
    expect(screen.getByTestId("personas-list")).toBeInTheDocument();
    expect(screen.getByText("Personas")).toBeInTheDocument();
    expect(screen.getByText("New Persona")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search personas…")).toBeInTheDocument();
    expect(screen.getByText("Persona One")).toBeInTheDocument();
    expect(screen.getByText("Persona Two")).toBeInTheDocument();
  });

  it("navigates to create page when New Persona button is clicked", () => {
    render(
      <MemoryRouter>
        <PersonasList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("New Persona"));
    expect(mockNavigate).toHaveBeenCalledWith("/personas/create");
  });

  it("navigates to persona detail when persona name is clicked", () => {
    render(
      <MemoryRouter>
        <PersonasList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Persona One"));
    expect(mockNavigate).toHaveBeenCalledWith("/personas/1");
    fireEvent.click(screen.getByText("Persona Two"));
    expect(mockNavigate).toHaveBeenCalledWith("/personas/2");
  });
});