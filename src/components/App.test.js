import { useAuth0 } from "@auth0/auth0-react";
import { renderWithProviders } from "../utils/test-helpers";

import App from "./App";

jest.mock("@auth0/auth0-react");

describe("The App component in logged out state", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("redirects user to Auth0 to login", () => {
    renderWithProviders(<App />);
    expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
  });
});

describe("The App component in logged in state", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: {
        name: "tylermcginnis",
      },
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("doesn't redirect user to Auth0 to login", () => {
    renderWithProviders(<App />);
    expect(useAuth0().loginWithRedirect).not.toHaveBeenCalled();
  });
});
