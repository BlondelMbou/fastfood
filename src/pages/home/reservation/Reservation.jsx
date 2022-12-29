import React from 'react';

import './reservation.css';

function Reservation() {
  return (
    <section id="reservation">
      <h2 className="mid-title">Reservation</h2>
      <h4 className="big-dark-blue-title ">
        fill this form to make a reservation
      </h4>
      <form action="">
        <label> Your Name</label>
        <input type="text" />
        <label> Your Email</label>
        <input type="email" />
        <label> Your Number</label>
        <input type="text" />
        <label> Reservation Date</label>
        <input type="date" />
        <input type="submit" value="Make The Reservation" />
      </form>
    </section>
  );
}

export default Reservation;
