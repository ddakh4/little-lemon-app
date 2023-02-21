import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["10:00 AM", "12:00 PM", "02:00 PM"];

  it("should update the available times when the user selects a date", () => {
    const updateTimes = jest.fn();
    const { getByTestId } = render(
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    );
    const dateInput = getByTestId("date");

    fireEvent.change(dateInput, { target: { value: "2023-03-01" } });

    expect(updateTimes).toHaveBeenCalledTimes(1);
    expect(updateTimes).toHaveBeenCalledWith(new Date("2023-03-01"));
  });

  it("should submit the form when the user clicks on the submit button", () => {
    const { getByTestId } = render(<BookingForm availableTimes={availableTimes} />);
    const submitButton = getByTestId("submit");

    fireEvent.click(submitButton);

    expect(window.location.href).toContain("/confirmation");
  });
});
