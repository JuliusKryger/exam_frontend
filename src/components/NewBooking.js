import { useState } from "react";

function NewBooking({facade, setErrorMessage}) {
    const [washingAssistants, setWashingAssistants] = useState([])

    const init = { BookingAppointment: "", BookingDuration: "", WashersId: "", UserName: facade.getUserName() }; 
    const [booking, setBooking] = useState(init);

    const performBooking = (evt) =>
    {
        evt.preventDefault();
        facade.Booking(booking.BookingAppointment, booking.BookingDuration, booking.WashersId, booking.UserName, setErrorMessage)
        console.log(booking)
    }
    const onChange = (evt) =>
    {
        setBooking({ ...booking, [evt.target.id]: evt.target.value })
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        facade.fetchData('carwash/washingassistants', updateWashingAssistants, setErrorMessage);
    };

    const updateWashingAssistants = (data) => {
        console.log(data)
        setWashingAssistants(data.all);
    }

    return(
        <div>
            <h1>Create Your new Booking, to assign a washing assistant enter their company number. Click below to get a list of all washing assistants.</h1>
                  <div>
             <form onChange={onChange}>
                  <h2>Enter the infomation for booking!</h2>
                    <input style={{textAlign:"center"}} placeholder="Date ex 01-01-2022 12:20" id="BookingAppointment" />
                    <input style={{textAlign:"center"}} placeholder="duration of the wash" id="BookingDuration" />
                    <input style={{textAlign:"center"}} placeholder="ID of wanted washer" id="WashersId" />
                    <button onClick={performBooking}>Book your wash now!</button>
                </form>
            </div>
            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                        <th scope="col">company id</th>
                        <th scope="col">name</th>
                        <th scope="col">primary Language</th>
                        <th scope="col">years Of Experience</th>
                        <th scope="col">price Per Hour</th>
                        </tr>
                    </thead>
                <tbody>
                        {washingAssistants.map((wa =>
                        <tr class="active-row"> 
                        <td key={wa.id}>{wa.id}</td>
                        <td key={wa.id}>{wa.name}</td>
                        <td key={wa.id}>{wa.primaryLanguage}</td>
                        <td key={wa.id}>{wa.yearsOfExperience}</td>
                        <td key={wa.id}>{wa.pricePerHour}</td>
                        </tr>))}
                </tbody>
                </table>
            </div>
            <button onClick={handleClick}>View all Washing Assistants!</button>
        </div>
    ); 
}

export default NewBooking;