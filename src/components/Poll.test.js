import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-helpers";

import Dashboard from "./Dashboard";

describe("The Dashboard component", () => {
  test("shows list of polls", () => {
    expect(renderWithProviders(<Dashboard />)).toMatchSnapshot();
  });
});
