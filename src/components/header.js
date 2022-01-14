import {BrowserRouter as Router, NavLink} from "react-router-dom";

export default function Header({ facade, loggedIn }) {
    return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/signup">Signup</NavLink></li>

        {facade.hasUserAccess('user', loggedIn) && (
          <div>
        <li><NavLink activeClassName="active" to="/washingassistants">Washing Assistants</NavLink></li>
        <li><NavLink activeClassName="active" to="/bookings">View Bookings</NavLink></li>
        <li><NavLink activeClassName="active" to="/booking">New Booking</NavLink></li>
        </div>
        )}
        {facade.hasUserAccess('admin', loggedIn) && (
        <li><NavLink activeClassName="active" to="/createwa">CreateWA</NavLink></li>
        )}
      </ul>
    </div>
    );
  }