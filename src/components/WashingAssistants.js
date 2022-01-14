import { useState } from "react";

function WashingAssistants({facade, setErrorMessage}) {
    const [washingAssistants, setWashingAssistants] = useState([])

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
            <h1>Here you can get a view of all availble Washing Assistants</h1>
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

export default WashingAssistants;