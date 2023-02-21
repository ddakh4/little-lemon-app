import restaurant from "../assets/restaurant.jpg";
function BookingHeading() {
  return (
    <div className="reserve-table-heading">
      <img
        className="header-reserve"
        src={restaurant}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Reserve a table</h1>
      </div>
    </div>
  );
}

export default BookingHeading