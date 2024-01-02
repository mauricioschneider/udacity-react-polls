import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-helpers";

import NewPoll from "./NewPoll";

describe("The NewPoll component", () => {
  test("submit button is enabled when form is not empty", () => {
    renderWithProviders(<NewPoll />, {
      preloadedState: { authedUser: "tylermcginnis" },
    });

    expect(screen.getByText("New Poll")).toBeInTheDocument();

    const optionOne = screen.getByTestId("optionOne");
    fireEvent.change(optionOne, {
      target: { value: "Option 1" },
    });

    const optionTwo = screen.getByTestId("optionTwo");
    fireEvent.change(optionTwo, {
      target: { value: "Option 2" },
    });

    expect(screen.getByTestId("submit")).toBeEnabled();
  });

  test("submit button is disabled when form is empty", () => {
    renderWithProviders(<NewPoll />, {
      preloadedState: { authedUser: "tylermcginnis" },
    });
    expect(screen.getByText("New Poll")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("optionOne"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("optionTwo"), {
      target: { value: "" },
    });

    expect(screen.getByTestId("submit")).toBeDisabled();
  });
});
