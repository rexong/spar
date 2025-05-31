import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import GenericView from "../../src/components/generic-view";

// frontend/src/components/generic-view.test.tsx

type Entity = {
  id: number;
  name: string;
};

const entity: Entity = { id: 42, name: "Test Entity" };

const tabs = [
  { key: "info", label: "Info" },
  { key: "details", label: "Details" },
];

const renderTab = (tab: string, entity: Entity) => (
  <div data-testid="tab-content">
    {tab === "info" ? `Info: ${entity.name}` : `Details: ${entity.id}`}
  </div>
);

const defaultProps = {
  entity,
  entityType: "Entity",
  notFoundMsg: "Entity not found",
  title: "Entity View",
  subtitle: "Subtitle here",
  idLabel: "ID",
  tabs,
  renderTab,
  editPath: "/entities/:id/edit",
};

describe("GenericView", () => {
  it("renders notFoundMsg if entity is undefined", () => {
    render(<GenericView {...defaultProps} entity={undefined} />);
    expect(screen.getByText("Entity not found")).toBeInTheDocument();
  });

  it("renders title, subtitle, idLabel, and entityId", () => {
    render(<GenericView {...defaultProps} />);
    expect(screen.getByText("Entity View")).toBeInTheDocument();
    expect(screen.getByText("Subtitle here")).toBeInTheDocument();
    expect(screen.getByText("ID: 42")).toBeInTheDocument();
  });

  it("renders all tabs and highlights the active tab", () => {
    render(<GenericView {...defaultProps} />);
    tabs.forEach(tab => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
    const activeTab = screen.getByText("Info");
    expect(activeTab).toHaveClass("border-b-2");
  });

  it("changes tab when a tab button is clicked", () => {
    render(<GenericView {...defaultProps} />);
    fireEvent.click(screen.getByText("Details"));
    expect(screen.getByText("Details: 42")).toBeInTheDocument();
    const activeTab = screen.getByText("Details");
    expect(activeTab).toHaveClass("border-b-2");
  });

  it("renders the output of renderTab for the active tab", () => {
    render(<GenericView {...defaultProps} />);
    expect(screen.getByTestId("tab-content")).toHaveTextContent("Info: Test Entity");
    fireEvent.click(screen.getByText("Details"));
    expect(screen.getByTestId("tab-content")).toHaveTextContent("Details: 42");
  });

  it("renders Edit button with correct href if editPath is provided", () => {
    render(<GenericView {...defaultProps} />);
    const editBtn = screen.getByText("Edit Entity");
    expect(editBtn).toBeInTheDocument();
    expect(editBtn.closest("a")).toHaveAttribute("href", "/entities/42/edit");
  });

  it("renders Delete button", () => {
    render(<GenericView {...defaultProps} />);
    expect(screen.getByText("Delete Entity")).toBeInTheDocument();
  });

  it("does not render Edit button if editPath is not provided", () => {
    render(<GenericView {...defaultProps} editPath={undefined} />);
    expect(screen.queryByText("Edit Entity")).not.toBeInTheDocument();
    expect(screen.getByText("Delete Entity")).toBeInTheDocument();
  });
});