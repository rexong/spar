import React from "react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../src/components/navbar";
import { useLocation } from "react-router-dom";
import "@testing-library/jest-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});


describe("Navbar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all nav items with correct labels and icons", () => {
    (useLocation as Mock).mockReturnValue({ pathname: "/" });
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    // Labels
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Personas")).toBeInTheDocument();
    expect(screen.getByText("Goals")).toBeInTheDocument();
    expect(screen.getByText("Conversations")).toBeInTheDocument();
    expect(screen.getByText("Metrics")).toBeInTheDocument();
    expect(screen.getByText("Annotations")).toBeInTheDocument();
    expect(screen.getByText("Evaluators")).toBeInTheDocument();
    expect(screen.getByText("Results")).toBeInTheDocument();
    // Icons
    expect(screen.getByText("🏠")).toBeInTheDocument();
    expect(screen.getByText("👤")).toBeInTheDocument();
    expect(screen.getByText("🎯")).toBeInTheDocument();
    expect(screen.getByText("💬")).toBeInTheDocument();
    expect(screen.getByText("📈")).toBeInTheDocument();
    expect(screen.getByText("📝")).toBeInTheDocument();
    expect(screen.getByText("🤖")).toBeInTheDocument();
    expect(screen.getByText("📊")).toBeInTheDocument();
  });

  it("highlights the active nav item based on location.pathname", () => {
    (useLocation as Mock).mockReturnValue({ pathname: "/metrics" });
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const metricsLink = screen.getByText("Metrics").closest("a");
    expect(metricsLink).toHaveClass("bg-slate-100");
    expect(metricsLink).toHaveClass("font-bold");
  });

  it("renders correct hrefs for nav links", () => {
    (useLocation as Mock).mockReturnValue({ pathname: "/" });
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Personas").closest("a")).toHaveAttribute("href", "/personas");
    expect(screen.getByText("Goals").closest("a")).toHaveAttribute("href", "/goals");
    expect(screen.getByText("Conversations").closest("a")).toHaveAttribute("href", "/conversations");
    expect(screen.getByText("Metrics").closest("a")).toHaveAttribute("href", "/metrics");
    expect(screen.getByText("Annotations").closest("a")).toHaveAttribute("href", "/annotations");
    expect(screen.getByText("Evaluators").closest("a")).toHaveAttribute("href", "/evaluators");
    expect(screen.getByText("Results").closest("a")).toHaveAttribute("href", "/results");
  });

  it("renders sidebar branding and user info", () => {
    (useLocation as Mock).mockReturnValue({ pathname: "/" });
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText("SPAR")).toBeInTheDocument();
    expect(screen.getByText("GenAI Engineer")).toBeInTheDocument();
    expect(screen.getByText("Role: Engineer")).toBeInTheDocument();
  });
});