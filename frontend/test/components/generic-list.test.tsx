import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GenericList from "../../src/components/generic-list";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock react-router-dom's useNavigate
const navigateMock = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => navigateMock,
}));

type Entity = {
  id: number;
  name: string;
  detail: string;
};

const entities: Entity[] = [
  { id: 1, name: "Alpha", detail: "First" },
  { id: 2, name: "Beta", detail: "Second" },
];

const defaultProps = {
  title: "Entities",
  subtitle: "A list of entities",
  createPath: "/entities/new",
  entities,
  getId: (e: Entity) => e.id,
  getName: (e: Entity) => e.name,
  getDetails: (e: Entity) => <span data-testid="detail">{e.detail}</span>,
  viewPath: (e: Entity) => `/entities/${e.id}`,
};

describe("GenericList", () => {
  beforeEach(() => {
    navigateMock.mockClear();
  });

  it("renders title, subtitle, and search input", () => {
    render(<GenericList {...defaultProps} />);
    expect(screen.getByText("Entities")).toBeInTheDocument();
    expect(screen.getByText("A list of entities")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search entities…")).toBeInTheDocument();
  });

  it("renders all entity names", () => {
    render(<GenericList {...defaultProps} />);
    entities.forEach((e) => {
      expect(screen.getByText(e.name)).toBeInTheDocument();
    });
  });

  it('calls navigate with createPath when "New" button is clicked', () => {
    render(<GenericList {...defaultProps} />);
    fireEvent.click(screen.getByText(/New Entit/));
    expect(navigateMock).toHaveBeenCalledWith("/entities/new");
  });

  it("calls navigate with viewPath when entity name is clicked", () => {
    render(<GenericList {...defaultProps} />);
    fireEvent.click(screen.getByText("Alpha"));
    expect(navigateMock).toHaveBeenCalledWith("/entities/1");
  });

  it("renders getDetails output for each entity", () => {
    render(<GenericList {...defaultProps} />);
    const details = screen.getAllByTestId("detail");
    expect(details).toHaveLength(entities.length);
    expect(details[0]).toHaveTextContent("First");
    expect(details[1]).toHaveTextContent("Second");
  });
});