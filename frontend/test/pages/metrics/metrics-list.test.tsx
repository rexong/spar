import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MetricsList from "../../../src/pages/metrics/metrics-list";
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

// Mock metrics-mock
vi.mock("../../../src/pages/metrics/metrics-mock", () => ({
  metrics: [
    {
      id: 1,
      name: "Metric One",
      versions: [{ version: 1, date: "2024-01-01", author: "A" }],
      date: "2024-01-01",
    },
    {
      id: 2,
      name: "Metric Two",
      versions: [{ version: 1, date: "2024-02-01", author: "B" }],
      date: "2024-02-01",
    },
  ],
}));

describe("MetricsList", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders metrics list and UI elements", () => {
    render(
      <MemoryRouter>
        <MetricsList />
      </MemoryRouter>
    );
    expect(screen.getByText("Metrics")).toBeInTheDocument();
    expect(screen.getByText("Metric One")).toBeInTheDocument();
    expect(screen.getByText("Metric Two")).toBeInTheDocument();
  });
});
