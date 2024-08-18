import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SidePanel from "./SidePanel";

describe("ReserveTable", () => {
  test("should display the panel when the reserve button is clicked", async () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    render(
      <SidePanel variant="reserve" onClose={handleClose} onSave={handleSave} />
    );

    // the panel is not visible
    expect(screen.queryByText("Required Field")).not.toBeInTheDocument();

    // simulate Reserve table button click
    fireEvent.click(screen.getByText("Reserve a table"));

    // Now the panel should be visible
    expect(screen.getByText("Reserve a table")).toBeInTheDocument();

    const saveButton = screen.getByText("save");
    // Initially the save button is disabled
    expect(saveButton).toBeDisabled();

    // Filling the required data to enable the button
    const inputName = screen.getByTestId("input-name");
    fireEvent.change(inputName, { target: { value: "Test name" } });
    expect(inputName).toHaveValue("Test name");
    const inputEmail = screen.getByTestId("input-email");
    fireEvent.change(inputEmail, { target: { value: "test@mail.com" } });
    expect(inputEmail).toHaveValue("test@mail.com");
    const selectDate = screen.getByTestId("input-date");
    fireEvent.change(selectDate, { target: { value: "2024-08-23" } });
    expect(selectDate).toHaveValue("2024-08-23");

    // click on save when all the required inputs are filled
    fireEvent.click(saveButton);

    // check if the confirmation message is shown
    const confirmationMessage = screen.getByTestId("confirmation message");
    expect(confirmationMessage).toBeInTheDocument();

    //wait for 200ms and verify that the alert is hidden
    await waitFor(
      () => {
        const confirmationDimension =
          confirmationMessage.getBoundingClientRect();
        expect(confirmationDimension.top).toBeLessThan(window.innerHeight);
      },
      { timeout: 200 } // wait for time in ms
    );
  });
});
