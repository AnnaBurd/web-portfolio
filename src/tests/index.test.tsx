/**
 * @jest-environment-jsdom
 */

import { render, screen } from "@testing-library/react";

import Mock from "./Mock";

describe("Mock Test", () => {
  test("should render Mock", () => {
    render(<Mock />);
    const text = screen.getByText(/Mock/i);
    expect(text).toBeDefined();
  });
});
