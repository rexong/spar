import React from "react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GenericForm from "../../src/components/generic-form";
import { useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";

// frontend/src/components/generic-form.test.tsx

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("GenericForm", () => {
  const defaultProps = {
    mode: "create" as "create" | "edit",
    title: "Test Title",
    subtitle: "Test Subtitle",
    nameLabel: "Name",
    namePlaceholder: "Enter name",
    descLabel: "Description",
    descPlaceholder: "Enter description",
    saveLabel: "Save",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all labels, placeholders, and initial values", () => {
    render(
      <MemoryRouter>
        <GenericForm {...defaultProps} initial={{ name: "foo", description: "bar" }} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toHaveValue("foo");
    expect(screen.getByLabelText("Description")).toHaveValue("bar");
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
  });

  it("updates name and description fields on user input", () => {
    render(
      <MemoryRouter>
        <GenericForm {...defaultProps} />
      </MemoryRouter>
    );
    const nameInput = screen.getByLabelText("Name");
    const descInput = screen.getByLabelText("Description");
    fireEvent.change(nameInput, { target: { value: "Alice" } });
    fireEvent.change(descInput, { target: { value: "Hello world" } });
    expect(nameInput).toHaveValue("Alice");
    expect(descInput).toHaveValue("Hello world");
  });

  it("calls navigate(-1) when Cancel is clicked", () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    render(
      <MemoryRouter>
        <GenericForm {...defaultProps} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it("calls onSave with correct values when Save is clicked", () => {
    const onSave = vi.fn();
    render(
      <MemoryRouter>
        <GenericForm {...defaultProps} onSave={onSave} />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Bob" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Desc" } });
    fireEvent.click(screen.getByText("Save"));
    expect(onSave).toHaveBeenCalledWith("Bob", "Desc");
  });

  it("disables name input when disableName is true", () => {
    render(
      <MemoryRouter>
        <GenericForm {...defaultProps} disableName />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("Name")).toBeDisabled();
  });

  it("renders save button with 💾 and correct label", () => {
    render(
      <MemoryRouter>
        <GenericForm {...defaultProps} saveLabel="Create" />
      </MemoryRouter>
    );
    const saveBtn = screen.getByText("Create").closest("button");
    expect(saveBtn).toBeInTheDocument();
    expect(saveBtn).toHaveTextContent("💾");
    expect(saveBtn).toHaveTextContent("Create");
  });
});