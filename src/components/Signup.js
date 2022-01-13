import { useState } from "react";
import {NavLink, useHistory} from "react-router-dom";

function Signup({ facade, setErrorMessage }) {

    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performSignup = (evt) =>
    {
        evt.preventDefault();
        facade.signup(loginCredentials.username, loginCredentials.password, setErrorMessage)
    }
    const onChange = (evt) =>
    {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <form onChange={onChange} className="login" >
                <h2>Signup here</h2>
                <input style={{textAlign:"center"}} placeholder="username" id="username" />
                <input style={{textAlign:"center"}} placeholder="password" id="password" />
                <button onClick={performSignup}>signup</button>
            </form>
        </div>
    )
}

export default Signup;