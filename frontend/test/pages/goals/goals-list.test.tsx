import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GoalsList from "../../../src/pages/goals/goals-list";
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

// Mock goals-mock
vi.mock("../../../src/pages/goals/goals-mock", () => ({
  goals: [
    {
      id: 1,
      name: "Book a Flight",
      versions: [1, 2],
      date: "2023-10-15",
    },
    {
      id: 2,
      name: "Technical Support",
      versions: [1],
      date: "2023-10-10",
    },
  ],
}));

describe("GoalsList", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders goals list and UI elements", () => {
    render(
      <MemoryRouter>
        <GoalsList />
      </MemoryRouter>
    );
    expect(screen.getByText("Goals")).toBeInTheDocument();
    expect(screen.getByText("Book a Flight")).toBeInTheDocument();
    expect(screen.getByText("Technical Support")).toBeInTheDocument();
    expect(screen.getByText("New Goal")).toBeInTheDocument();
  });

  it("navigates to create on button click", () => {
    render(
      <MemoryRouter>
        <GoalsList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("New Goal"));
    expect(mockNavigate).toHaveBeenCalledWith("/goals/create");
  });

  it("navigates to goal view on goal click", () => {
    render(
      <MemoryRouter>
        <GoalsList />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Book a Flight"));
    expect(mockNavigate).toHaveBeenCalledWith("/goals/1");
  });
});
