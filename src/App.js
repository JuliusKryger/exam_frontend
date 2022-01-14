import React, { useState } from "react"
import facade from "./facades/apiFacade";
import Home from './components/home';
import Header from './components/header';
import WashingAssistants from "./components/WashingAssistants";
import Booking from "./components/Booking";
import CreateWA from "./components/CreateWA";
import NewBooking from "./components/NewBooking";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('All is good ... so far');

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('Logged out.')
  };

  return (
    <div>
  <Header facade={facade} loggedIn={loggedIn} />
  <Switch>
    <Route exact path="/">
    <Home
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
            />
    </Route>

    <Route exact path="/signup"> 
              <Signup facade={facade} setErrorMessage={setErrorMessage} />
    </Route>

    <Route exact path="/washingassistants"> 
    {facade.hasUserAccess('user', loggedIn) &&
              <WashingAssistants facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/bookings"> 
    {facade.hasUserAccess('user', loggedIn) && 
              <Booking facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/booking"> 
    {facade.hasUserAccess('user', loggedIn) && 
              <NewBooking facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/createwa"> 
    {facade.hasUserAccess('admin', loggedIn) && 
              <CreateWA facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

  </Switch>
    </div>
  );
}

export default App;

/* <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
*/