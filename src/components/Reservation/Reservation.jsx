import React from 'react';
import '../../components/Reservation/Reservation.css';
function Reservation() {
  return (
    <section id="reservation">
      <h4 class="mid-title">Reservation</h4>
      <h2 className="big-dark-blue-title ">
        fill this form to make a reservation
      </h2>
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
