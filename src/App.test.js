import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("./pages/Home", () => {
  const HomeMock = () => <div>Home Page</div>;
  return HomeMock;
});
jest.mock("./pages/About", () => {
  const AboutMock = () => <div>About Page</div>;
  return AboutMock;
});
jest.mock("./pages/Portfolio", () => {
  const PortfolioMock = () => <div>Portfolio Page</div>;
  return PortfolioMock;
});
jest.mock("./pages/PortfolioDetails", () => {
  const PortfolioDetailsMock = () => <div>Portfolio Details Page</div>;
  return PortfolioDetailsMock;
});
jest.mock("./pages/Services", () => {
  const ServicesMock = () => <div>Services Page</div>;
  return ServicesMock;
});

import App from "./App";

test("renders home route", () => {
  render(<App />);
  expect(screen.getByText("Home Page")).toBeInTheDocument();
});
