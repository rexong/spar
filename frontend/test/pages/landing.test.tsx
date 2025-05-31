import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../../src/pages/landing";

// frontend/src/pages/landing.test.tsx

describe("Dashboard Page", () => {
	it("renders the dashboard heading and welcome text", () => {
		render(<Dashboard />);
		expect(screen.getByRole("heading", { name: /dashboard/i })).toBeInTheDocument();
		expect(screen.getByText(/welcome to the genai evaluation platform/i)).toBeInTheDocument();
	});

	it("renders all dashboard cards with correct titles and counts", () => {
		render(<Dashboard />);
		const cards = screen.getByTestId("dashboard-cards");
		// There should be 6 cards
		expect(within(cards).getAllByTestId(/dashboard-card-/)).toHaveLength(6);

		// Check for specific card content
		expect(screen.getByTestId("dashboard-card-personas")).toHaveTextContent("Personas");
		expect(screen.getByTestId("dashboard-card-personas")).toHaveTextContent("12");
		expect(screen.getByTestId("dashboard-card-goals")).toHaveTextContent("Goals");
		expect(screen.getByTestId("dashboard-card-goals")).toHaveTextContent("8");
		expect(screen.getByTestId("dashboard-card-conversations")).toHaveTextContent("Conversations");
		expect(screen.getByTestId("dashboard-card-conversations")).toHaveTextContent("45");
		expect(screen.getByTestId("dashboard-card-annotations")).toHaveTextContent("Annotations");
		expect(screen.getByTestId("dashboard-card-annotations")).toHaveTextContent("32");
		expect(screen.getByTestId("dashboard-card-llm-evaluators")).toHaveTextContent("LLM Evaluators");
		expect(screen.getByTestId("dashboard-card-llm-evaluators")).toHaveTextContent("3");
		expect(screen.getByTestId("dashboard-card-results")).toHaveTextContent("Results");
		expect(screen.getByTestId("dashboard-card-results")).toHaveTextContent("28");
	});

	it("renders the recent activity section with correct items", () => {
		render(<Dashboard />);
		expect(screen.getByTestId("recent-activity")).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /recent activity/i })).toBeInTheDocument();
		expect(screen.getByText(/latest updates across the platform/i)).toBeInTheDocument();

		// There should be 4 recent activity items
		for (let i = 0; i < 4; i++) {
			expect(screen.getByTestId(`recent-activity-item-${i}`)).toBeInTheDocument();
		}
		expect(screen.getByTestId("recent-activity-item-0")).toHaveTextContent("New Persona Created");
		expect(screen.getByTestId("recent-activity-item-1")).toHaveTextContent("New Annotations");
		expect(screen.getByTestId("recent-activity-item-2")).toHaveTextContent("Evaluator Updated");
		expect(screen.getByTestId("recent-activity-item-3")).toHaveTextContent("New Goal Created");
	});

	it("renders correct number of dashboard cards and recent activity items", () => {
		render(<Dashboard />);
		const cards = screen.getByTestId("dashboard-cards");
		expect(within(cards).getAllByTestId(/dashboard-card-/)).toHaveLength(6);

		const activityList = screen.getByTestId("recent-activity");
		expect(within(activityList).getAllByRole("listitem")).toHaveLength(4);
	});
});