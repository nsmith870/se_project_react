import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/wtwr-avatarImage.svg";
import ToggleSwitch from "../TemperatureToggleSwitch/TemperatureToggleSwitch";

function Header({ addOnBtnClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink  to ="/">
      <img alt="WTWR logo" src={logo} className="header__logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__btns">
        <ToggleSwitch />
        <button
          onClick={addOnBtnClick}
          type="button"
          className="header__clothes-btn"
        >
          + Add Clothes
        </button>
      </div>

      <NavLink className="header__profile-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrance Tegegne</p>
          <img src={avatar} alt="Terrance Tegegne" className="header__avatar" />
        </div>
      </NavLink>
    </header>
  );
}
export default Header;
