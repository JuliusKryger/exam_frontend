import { useState } from "react";

function Booking({facade, setErrorMessage}) {

    const init = { appointment: "", duration: 1 };
    const [booking, setBooking] = useState(init)

    const fetchBookings = (evt) => {
        evt.preventDefault();
        facade.fetchData('carwash/bookings/' + facade.getUserName(), updateBookings, setErrorMessage);
    };

    const updateBookings = (data) => {
        console.log(data)
        setBooking(data);
        console.log(booking)
    }


    return(
        <div>
            <h1>Here you can get a view of your current bookings</h1>

            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                        <th scope="col">Booking date and time</th>
                        <th scope="col">Duration</th>
                        </tr>
                    </thead>
                <tbody>
                        <tr class="active-row"> 
                        <td >{booking.appointment}</td>
                        <td >{booking.duration}</td>
                        </tr>
                </tbody>
                </table>
            </div>

            <button onClick={fetchBookings}>View all Your Bookings!</button>

        </div>
    );
    
}

export default Booking;