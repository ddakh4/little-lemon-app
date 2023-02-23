import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import BookingPage from "./pages/Booking/BookingPage";

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

jest.mock('./fetchAPI', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve(['10:00', '11:00', '12:00'])),
}));

describe('BookingPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the booking heading and form', async () => {
    await act(async () => {
      render(<BookingPage />);
    });

    expect(screen.getByText(/booking/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book/i })).toBeInTheDocument();
  });

  it('should fetch the available booking times', async () => {
    await act(async () => {
      render(<BookingPage />);
    });

    expect(fetchAPI).toHaveBeenCalledWith(new Date());
  });

  it('should display the available booking times', async () => {
    await act(async () => {
      render(<BookingPage />);
    });

    expect(screen.getByText(/10:00/i)).toBeInTheDocument();
    expect(screen.getByText(/11:00/i)).toBeInTheDocument();
    expect(screen.getByText(/12:00/i)).toBeInTheDocument();
  });


  describe('BookingForm', () => {
    it('should show error messages for invalid inputs', async () => {
      render(<BookingForm />);

      // Find form fields
      const dateInput = screen.getByTestId('date');
      const timeInput = screen.getByTestId('time');
      const guestsInput = screen.getByTestId('guests');
      const occasionInput = screen.getByTestId('occasion');
      const submitButton = screen.getByTestId('submit');

      // Attempt to submit form with invalid inputs
      fireEvent.change(dateInput, { target: { value: '' } });
      fireEvent.change(timeInput, { target: { value: '' } });
      fireEvent.change(guestsInput, { target: { value: '0' } });
      fireEvent.change(occasionInput, { target: { value: '' } });
      fireEvent.click(submitButton);

      // Verify error messages are shown
      const errorMessage = await screen.findAllByTestId('error');
      expect(errorMessage).toHaveLength(4);
    });

    it('should submit form for valid inputs', async () => {
      render(<BookingForm />);

      // Find form fields
      const dateInput = screen.getByTestId('date');
      const timeInput = screen.getByTestId('time');
      const guestsInput = screen.getByTestId('guests');
      const occasionInput = screen.getByTestId('occasion');
      const submitButton = screen.getByTestId('submit');

      // Enter valid input values
      fireEvent.change(dateInput, { target: { value: '2022-02-28' } });
      fireEvent.change(timeInput, { target: { value: '7:00 PM' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionInput, { target: { value: 'Birthday' } });
      fireEvent.click(submitButton);

      // Verify that form was submitted successfully
      const confirmationMessage = await screen.findByTestId('confirmation-message');
      expect(confirmationMessage).toBeInTheDocument();
    });
  });

});
