import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import MetricsEdit from "../../../src/pages/metrics/metrics-edit";
import "@testing-library/jest-dom";

// Mock the actual import path used in MetricsEdit
vi.mock("../../../src/pages/metrics/metrics-form", () => ({
  default: (props: any) => <div data-testid="metrics-form-mock" {...props} />,
}));

// Mock metrics-mock with id as number to match metrics-edit.tsx logic
vi.mock("../../../src/pages/metrics/metrics-mock", () => ({
  metrics: [
    { id: 1, name: "Test Metric", description: "desc", versions: [], date: "2024-01-01" },
  ],
}));

describe("MetricsEdit", () => {
  it("renders MetricsForm in edit mode", () => {
    window.history.pushState({}, "", "/metrics/edit/1");
    render(
      <MemoryRouter initialEntries={["/metrics/edit/1"]}>
        <Routes>
          <Route path="/metrics/edit/:id" element={<MetricsEdit />} />
        </Routes>
      </MemoryRouter>
    );
    const form = screen.getByTestId("metrics-form-mock");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("mode", "edit");
  });
});
