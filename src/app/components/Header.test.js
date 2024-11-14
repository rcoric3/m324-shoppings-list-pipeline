import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("renders a link to the homepage", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /einkaufsliste app/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders a link to create a new list", () => {
    render(<Header />);
    const registerLink = screen.getByRole("link", {
      name: /neue liste erstellen/i,
    });
    expect(registerLink).toHaveAttribute("href", "/register");
  });

  it("renders a link to join a list", () => {
    render(<Header />);
    const joinLink = screen.getByRole("link", { name: /liste beitreten/i });
    expect(joinLink).toHaveAttribute("href", "/join");
  });

  it("renders a link to view the shopping list", () => {
    render(<Header />);
    const listLink = screen.getByRole("link", {
      name: /einkaufsliste anzeigen/i,
    });
    expect(listLink).toHaveAttribute("href", "/list");
  });
});
