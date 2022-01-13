import { useState } from "react";

function CreateWA({ facade, setErrorMessage }) {

    const init = { washingassistantName: "", washingassistantPrimaryLanguage: "", washingassistantYearsOfExperience: "", washingassistantPricePerHour: "" }; 
    const [washingassistant, setWashingassistant] = useState(init);

    const performCreateWashingAssistant = (evt) =>
    {
        evt.preventDefault();
        facade.CreateWashingAssistant(washingassistant.washingassistantName, washingassistant.washingassistantPrimaryLanguage, washingassistant.washingassistantYearsOfExperience, washingassistant.washingassistantPricePerHour, setErrorMessage)
    }
    const onChange = (evt) =>
    {
        setWashingassistant({ ...washingassistant, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <form onChange={onChange}>
                <h2>Enter the infomation for your CreateWA!</h2>
                <input style={{textAlign:"center"}} placeholder="Name" id="washingassistantName" />
                <input style={{textAlign:"center"}} placeholder="Primary Language" id="washingassistantPrimaryLanguage" />
                <input style={{textAlign:"center"}} placeholder="Years Of Experience" id="washingassistantYearsOfExperience" />
                <input style={{textAlign:"center"}} placeholder="Price Per Hour" id="washingassistantPricePerHour" />
                <button onClick={performCreateWashingAssistant}>Create A New Washing Assistant!</button>
            </form>
        </div>
    )
}

export default CreateWA;